# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**thelidia-ai-trading** — Contains a fully initialized Antora/AsciiDoc knowledge base on stock market investing.

## Stack

- **Documentation**: Antora / AsciiDoc (`doc/` directory)
- IDE: IntelliJ IDEA (`.idea/` project files present)

## Alpaca Paper Trading

Credentials live in `.env` (gitignored). Account number `PA3X4OM3JRLD`, paper balance $100,000.

| Variable | Purpose |
|---|---|
| `ALPACA_API_KEY` | API key ID |
| `ALPACA_API_SECRET` | API secret key |
| `ALPACA_BASE_URL` | `https://paper-api.alpaca.markets/v2` |
| `FINNHUB_API_KEY` | Finnhub free-tier key (news enrichment only — congressional trading endpoint requires paid plan) |

Alpaca REST API uses headers `APCA-API-KEY-ID` and `APCA-API-SECRET-KEY`. Switch to `https://api.alpaca.markets/v2` for live trading.

## Skills (`.claude/commands/`)

| File | Invocation | Description |
|---|---|---|
| `analyse-market.md` | `/analyse-market` | Fetches live market data (QQQ, SPY, VIX, Fear & Greed), produces a 1–6 barometer with trade recommendations, and persists the analysis as AsciiDoc in `doc/modules/market-analysis/` |
| `maj-kb.md` | `/maj-kb` | Scans `raw/` for notes, links, and PDFs; categorises content; creates or updates AsciiDoc pages in `doc/` in French |
| `opt-kb.md` | `/opt-kb` | Audits the existing `doc/` knowledge base: fixes broken xrefs, adds missing P&L Mermaid charts, enforces AsciiDoc format rules, completes nav and breadcrumbs |
| `copy-congress-trades.md` | `/copy-congress-trades` | Scrapes Capitol Trades for recent congressional buys, ranks by consensus signal, and mirrors the top 3 via Alpaca — writes a log to `trade-log/YYYY-MM-DD.md` and commits it |

## Knowledge Base

### Workflow

1. Add notes, links, PDFs to `raw/` (see `raw/README.md` for formats)
2. Run `/maj-kb` in Claude Code to process raw files and update `doc/`

### Directory structure

- `raw/` — Input: notes, `.url` link files, PDFs (not managed by Claude, edited freely)
- `doc/` — Output: Antora component source (managed by Claude via `/maj-kb`)
- `antora-playbook.yml` — Antora build configuration (output to `build/site/`)

### Building the Antora site

Requires Node.js. First-time setup:

```bash
npm install
```

Build:

```bash
npm run build
# or with clean output:
npm run build:clean
```

Dependencies (declared in `package.json`): `@antora/cli`, `@antora/site-generator`, `asciidoctor-kroki`.
The Kroki extension renders `[mermaid]` diagram blocks (P&L charts, etc.) via the kroki.io service during build.

### Doc sections (under `doc/modules/ROOT/pages/`)

| Directory | Content |
|-----------|---------|
| `actions/` | Stock analysis — fundamental, technical |
| `options/` | Options — calls, puts, greeks |
| `strategies/` | Trading strategies — covered call, CSP, spreads, condors |
| `hedging/` | Portfolio hedging — see organisation below |
| `portfolio/` | Portfolio management — allocation, sizing, risk |
| `ressources/` | Tools, links, glossary, video references |

### Site organisation principle

For any topic complex enough to require multiple strategies or sub-concepts, use **one overview page + sub-pages**:

- `<topic>/index.adoc` — Overview: intro, key concepts, comparison table (with xrefs to sub-pages), decision guide
- `<topic>/<subtopic>.adoc` — Detail page: full explanation, Mermaid P&L chart, worked example, when to use

Sub-pages must be declared in `nav.adoc` as nested items (`**`) under their parent section entry.
Each sub-page must include a breadcrumb link back to the overview at the top: `xref:<topic>/index.adoc[← Retour à l'overview]`.

Example (hedging):
```
hedging/
  index.adoc            ← overview: pourquoi hedger, concepts clés, tableau comparatif, guide décisionnel
  protective-put.adoc   ← détail stratégie 1
  collar.adoc           ← détail stratégie 2
  bear-put-spread.adoc  ← détail stratégie 3
  couverture-indices.adoc
  vix-volatilite.adoc
```

### Custom command

`/maj-kb` — Reads all files in `raw/`, categorizes content, and updates Antora pages in `doc/`. Writes all content in French. Respects the overview + sub-pages structure. Defined in `.claude/commands/maj-kb.md`.
