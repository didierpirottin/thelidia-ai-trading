# Copy Congress Trades

Analyse recent congressional stock trades and mirror the strongest buy signals using the Alpaca paper trading account.

**Data sources:**
- **Primary**: Capitol Trades HTML scrape (free, no key, comprehensive)
- **Fallback**: House Clerk PTR filing list (official government source — detects new filers even if content can't be auto-parsed)
- **Enrichment**: Finnhub company news API (free, uses `FINNHUB_API_KEY`) on the final ticker picks

> Note: Finnhub's `/stock/congressional-trading` endpoint requires a paid plan and is NOT used here.

---

## Step 1 — Load configuration

Read the `.env` file in the project root and export as shell variables:
- `ALPACA_API_KEY`, `ALPACA_API_SECRET`, `ALPACA_BASE_URL`
- `FINNHUB_API_KEY` (optional — used only for news enrichment at the end)

Compute today's date and the date 30 days ago in `YYYY-MM-DD` format (`DATE_TODAY`, `DATE_FROM`).

---

## Step 2 — Fetch recent trades from Capitol Trades (primary)

Capitol Trades is a free public site — no login required. Make requests with a real browser User-Agent and space them out to avoid rate limiting.

```bash
curl -s "https://www.capitoltrades.com/trades?txDate.gte=DATE_FROM&pageSize=96&page=1" \
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" \
  -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" \
  -H "Accept-Language: en-US,en;q=0.9" \
  -H "Cache-Control: no-cache"
```

**Rate limiting rules:**
- Wait **3 seconds** before each page request.
- If HTTP 429: wait **20 seconds** and retry once.
- If still 429: go to fallback (Step 3). Do not retry again.
- Fetch up to **3 pages** (pageSize=96 each = up to 288 trades). Stop early if the last page has fewer than 96 results.

**Parsing the HTML table:** Each trade row contains these columns in order:
1. Politician name + party + state
2. Trade date (`txDate`)
3. Ticker symbol
4. Company name
5. Asset type (Stock / Option / Crypto / etc.)
6. Transaction type (Buy / Sell / Exchange)
7. Amount range (e.g. `$1,001 – $15,000`)

Extract all rows into a list of records with fields: `politician`, `ticker`, `assetType`, `transaction`, `txDate`, `amount`.

---

## Step 3 — House Clerk PTR fallback (if Capitol Trades fails entirely)

If Capitol Trades returned zero records after all retries, use the House Clerk to at least identify politicians who filed Periodic Transaction Reports recently:

```bash
curl -s "https://disclosures-clerk.house.gov/FinancialDisclosure/ViewMemberSearchResult" \
  -X POST \
  --data "LastName=&State=&District=&FilingYear=2026&FilingType=P&Submit=Search" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "User-Agent: Mozilla/5.0"
```

Parse the HTML table to extract: member name, filing ID (link to PDF like `ptr-pdfs/2026/XXXXXXXX.pdf`).

Filter to filings from the last 7 days by checking the filing date column.

**Limitation**: the actual trade content is in PDFs and cannot be auto-parsed. In this fallback mode:
- Log the names of politicians who recently filed
- Write a note in the trade log that manual review of the PDFs is needed
- Do NOT place any orders
- Exit cleanly after writing the log

---

## Step 4 — Filter to actionable buy signals

From the Capitol Trades data, keep only records where **all** conditions are true:

1. `transaction` contains `"buy"` or `"purchase"` (case-insensitive)
2. `ticker` contains only uppercase letters, 1–5 characters (skip options `/`, bonds with numbers, blank tickers)
3. `assetType` is `"Stock"` — skip Options, Crypto, ETFs, Mutual Funds
4. `txDate` is within the last 30 days

---

## Step 5 — Score and rank tickers

Group filtered records by `ticker`. For each:
- **`buyCount`**: number of distinct politicians who bought it
- **`latestDate`**: most recent `txDate`
- **`politicians`**: list of names

Sort descending by `buyCount`, then by `latestDate`.

Print the ranked table:
```
Rank | Ticker | buyCount | Latest Date | Politicians
1    | NVDA   | 4        | 2026-06-14  | Pelosi N., Smith J., ...
2    | AAPL   | 2        | 2026-06-10  | ...
```

---

## Step 6 — Enrich top picks with Finnhub news (optional)

If `FINNHUB_API_KEY` is set, fetch the last 7 days of company news for the top 5 ranked tickers:

```bash
curl -s "https://finnhub.io/api/v1/company-news?symbol=TICKER&from=DATE_FROM_7D&to=DATE_TODAY&token=FINNHUB_API_KEY"
```

For each ticker, summarise the top 1–2 headlines. Include them in the trade log under "Context". Skip this step silently if the key is missing or the request fails.

---

## Step 7 — Check existing Alpaca positions and open orders

```bash
# Current positions
curl -s "$ALPACA_BASE_URL/positions" \
  -H "APCA-API-KEY-ID: $ALPACA_API_KEY" \
  -H "APCA-API-SECRET-KEY: $ALPACA_API_SECRET"

# Open orders
curl -s "$ALPACA_BASE_URL/orders?status=open" \
  -H "APCA-API-KEY-ID: $ALPACA_API_KEY" \
  -H "APCA-API-SECRET-KEY: $ALPACA_API_SECRET"
```

Build a skip-set: all tickers currently held + all tickers with an open buy order. Remove them from the ranked list.

---

## Step 8 — Place orders for the top 3 candidates

Take the top **3 tickers** from the remaining ranked list. For each, place a **market buy for 1 share** (`time_in_force: "day"`):

```bash
curl -s -X POST "$ALPACA_BASE_URL/orders" \
  -H "APCA-API-KEY-ID: $ALPACA_API_KEY" \
  -H "APCA-API-SECRET-KEY: $ALPACA_API_SECRET" \
  -H "Content-Type: application/json" \
  -d "{\"symbol\": \"TICKER\", \"qty\": \"1\", \"side\": \"buy\", \"type\": \"market\", \"time_in_force\": \"day\"}"
```

Wait 1 second between submissions.

| Response | Action |
|---|---|
| Status `accepted`, `filled_at: null` | Normal — market closed, queues for next open |
| HTTP 422 | Log ticker + error body, continue to next |
| HTTP 403 | Log auth failure, stop all order placement |

---

## Step 9 — Write trade log and commit

Write `trade-log/YYYY-MM-DD.md`:

```markdown
# Congress Trade Copy — YYYY-MM-DD

## Data Source
Capitol Trades: X records fetched (N pages)
[or: Capitol Trades unavailable — House PTR fallback used (manual review needed)]

## Buy Signal Rankings
| Rank | Ticker | # Politicians | Latest Trade | Politicians | News |
|---|---|---|---|---|---|
| 1 | NVDA | 4 | 2026-06-14 | Pelosi N., ... | "Jensen Huang speaks at..." |
| 2 | AAPL | 2 | 2026-06-10 | Smith J., ... | — |

## Skipped
- TICKER — already held / open order / filtered (reason)

## Orders Placed
| Ticker | Qty | Order ID | Status |
|---|---|---|---|
| NVDA | 1 | uuid | accepted |

## Errors
- TICKER — error description
```

Create `trade-log/` if it doesn't exist. Commit with:
```
/copy-congress-trades: YYYY-MM-DD — N orders placed
```

---

## Full error handling

| Condition | Action |
|---|---|
| Capitol Trades 429 on retry | Switch to House PTR fallback, log outage |
| House PTR also fails | Write log noting total outage, exit cleanly, no orders |
| Zero buy signals after filtering | Log "no signals today", exit cleanly, no orders |
| Alpaca 422 on a ticker | Log and skip that ticker, continue |
| Alpaca 403 | Log auth failure, stop all order placement |
| `FINNHUB_API_KEY` missing | Skip news enrichment silently |
