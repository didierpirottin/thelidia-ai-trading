Analyse l'état actuel du marché (Nasdaq en priorité, S&P 500 et VIX en contexte), commente son évolution récente, ses perspectives, puis produis un **baromètre** clair avec attitude recommandée et des **exemples de trades précis**. Enregistre ensuite l'analyse dans la base de connaissance Antora.

> **RÈGLE ABSOLUE DE FRAÎCHEUR DES DONNÉES**
> Toute cette analyse doit être fondée sur les données **du jour même** (date courante disponible dans le contexte).
> - Inclure la date complète (ex : "June 9 2026") dans **chaque** requête WebSearch pour forcer les résultats récents.
> - Si un résultat ne mentionne pas la date du jour, **l'ignorer** et relancer une requête plus ciblée.
> - Ne jamais s'appuyer sur des cours, niveaux ou actualités datant de plus de 24–48 heures pour construire le baromètre ou les recommandations.
> - Si une donnée du jour est introuvable, le signaler explicitement : `[donnée non disponible en temps réel — dernière valeur connue : X]`, plutôt que de présenter une valeur périmée comme actuelle.

## Étape 1 — Collecte des données de marché

**Avant toute recherche**, noter la date du jour exacte (disponible dans le contexte système) et l'injecter dans chaque requête ci-dessous. L'objectif est d'obtenir les cours de clôture du jour ou les données de séance en cours — pas des données d'il y a quelques jours.

Effectue les recherches suivantes (WebSearch) dans l'ordre, en privilégiant les sources en temps réel :

1. **Cours du jour — indices** : prix de clôture ou cours en séance du QQQ, SPY, VIX **du jour**
2. **Actualité macro du jour** : publications économiques du jour (CPI, NFP, FOMC, GDP si applicable) + déclarations Fed des dernières 48 h
3. **Flux de marché** : secteurs leaders et retardataires, breadth (advance/decline), put/call ratio **du jour**
4. **Catalyseurs à venir** : prochaines publications de résultats majeurs (Mag7, semi-conducteurs), calendrier économique des 4 semaines à venir
5. **Sentiment** : Fear & Greed Index (valeur du jour), AAII sentiment survey (dernière publication hebdomadaire), positionnement des fonds

Requêtes suggérées — **remplacer `[DATE]` par la date du jour au format anglais, ex : "June 9 2026"** :
- `QQQ SPY stock price today [DATE]`
- `VIX index level today [DATE]`
- `stock market news today [DATE]`
- `Fear and Greed Index today [DATE]`
- `Fed Powell news today [DATE]`
- `S&P 500 Nasdaq technical analysis [DATE]`
- `put call ratio today [DATE]`
- `economic calendar this week [DATE]`
- `Nasdaq earnings calendar upcoming [DATE]`

> Si une requête renvoie des résultats antérieurs au jour courant, relancer en ajoutant `site:finance.yahoo.com` ou `site:cnbc.com` ou en encadrant la date entre guillemets (`"June 9 2026"`).
> Ne pas hésiter à multiplier les requêtes pour un même indicateur jusqu'à obtenir une source datée du jour.

---
> **RÈGLE DE FORMAT — SORTIE UTILISATEUR (étapes 2 à 6)**
> Tout le texte présenté à l'utilisateur doit être en **bullet points**. Pas de prose, pas d'introduction, pas de conclusion. Phrases courtes (max 15 mots). Chaque ligne = une information précise.

---

## Étape 2 — Analyse de l'évolution récente

### 2a. Ce qui s'est passé (faits)

Sortir uniquement des bullets, format :
- **QQQ** : [prix] — 1 sem [±X %] / 1 mois [±X %] / 3 mois [±X %]
- **SPY** : [prix] — 1 sem [±X %] / 1 mois [±X %] / 3 mois [±X %]
- **Événement 1** : [fait en 8 mots max — ex: "CPI +3,3 % > attentes 3,1 %"]
- **Événement 2** : [fait — ex: "Nvidia guidance : +18 % AH"]
- **Secteur moteur** : [XLK +X % / IA / semis] — [raison en 5 mots]
- **Secteur à la traîne** : [XLP −X %] — [raison en 5 mots]

### 2b. Pourquoi (causes profondes)

- **Fed** : taux [X,XX %] — [statu quo / hausse / baisse] — prochain FOMC [date]
- **Inflation** : CPI [X,X %] YoY — [au-dessus / en-ligne / en-dessous] attentes
- **Emploi** : NFP [+XXX K] — [surprise haussière / en-ligne / déception]
- **Sentiment** : put/call ratio [X,XX] — flux ETF [acheteurs nets / vendeurs]
- **Risque 1** : [ex: "Concentration Mag7 : 35 % du S&P 500"]
- **Risque 2** : [ex: "Taux 10 ans remonte — compression des multiples"]

### 2c. Signaux techniques clés

- **QQQ** : [prix] — MA20 [X] / MA50 [X] / MA200 [X]
- **Position** : [Au-dessus / En-dessous] MA50 — [Au-dessus / En-dessous] MA200
- **Tendance** : [Haussière / Neutre / Baissière] — [raison en 5 mots]
- **Support clé** : [prix] — [description courte ex: "ancien ATH / MA50 / gap up"]
- **Résistance clé** : [prix] — [description courte]
- **RSI** : [valeur] — [suracheté >70 / neutre / survendu <30]
- **Structure** : [Higher highs / Lower lows / Range] depuis [date ou durée]

## Étape 3 — Perspectives à 4–8 semaines

Deux scénarios uniquement. Bullets stricts.

**Scénario haussier — Probabilité [X] %**
- Condition nécessaire 1 : [ex: "Taux 10 ans repasse sous 4,3 %"]
- Condition nécessaire 2 : [ex: "QQQ tient au-dessus de MA50"]
- Cible QQQ : [prix $] — Cible SPY : [prix $]
- Catalyseur 1 : [ex: "Pause Fed confirmée en juillet"]
- Catalyseur 2 : [ex: "Résultats Nvidia > attentes"]

**Scénario baissier — Probabilité [X] %**
- Déclencheur 1 : [ex: "Cassure de MA50 QQQ sous [prix]"]
- Déclencheur 2 : [ex: "CPI surprise haussière > 3,5 %"]
- Support critique 1 : QQQ [prix] — MA50
- Support critique 2 : QQQ [prix] — MA200
- Tail risk 1 : [ex: "Escalade géopolitique — VIX spike"]
- Tail risk 2 : [ex: "Recession surprise — NFP < 0"]

## Étape 4 — Baromètre du marché

Attribue un niveau au baromètre parmi les 6 ci-dessous. Justification en **3 bullets max** :

```
╔══════════════════════════════════════════════════════════════════╗
║               BAROMÈTRE DU MARCHÉ — NIVEAU ACTUEL               ║
╠════╦══════════════════════╦══════════════════════════════════════╣
║  6 ║ DANGER — SORTIE      ║ Vente défensive, réduction max expo  ║
║  5 ║ COUVERTURE           ║ Mettre du hedging, réduire le delta  ║
║  4 ║ PRUDENCE             ║ Delta-neutral / theta, pas d'achat   ║
║  3 ║ CONSOLIDATION        ║ Renforcement progressif, sélectif    ║
║  2 ║ BUY THE DIP          ║ Achats sur repli, ETF larges         ║
║  1 ║ OPPORTUNITE MAX      ║ Déploiement fort, options agressives ║
╚════╩══════════════════════╩══════════════════════════════════════╝

  NIVEAU ACTUEL : [X] — [LABEL]
  Justification :
    - [Signal principal — ex: "VIX 22, MA50 tenue, trend haussier intact"]
    - [Signal secondaire — ex: "Sentiment neutre, put/call 0,85"]
    - [Conclusion — ex: "Pas de déploiement agressif — attendre confirmation"]
```

Définition des niveaux :
- **Niveau 1 — Opportunité max** : marché en capitulation ou très oversold, VIX > 35, sentiment extrême fear — déployer du capital agressivement
- **Niveau 2 — Buy the dip** : correction saine (–5 à –10 %) sur tendance haussière intacte, MA200 respectée — achats progressifs
- **Niveau 3 — Consolidation** : trend haussier mais momentum faible, indices en range — renforcement sélectif sur les meilleurs setups
- **Niveau 4 — Prudence** : signaux mitigés, VIX 20–28, macro incertaine — favoriser les stratégies theta/delta-neutral, ne pas initier de nouveaux longs
- **Niveau 5 — Couverture** : tendance en question, cassure de MA50, VIX > 28 — protéger le portefeuille avec puts, collars ou spreads baissiers
- **Niveau 6 — Danger** : tendance baissière confirmée, cassure de MA200, macro se détériore — sortie des positions risquées, cash ou inverse ETF

## Étape 4bis — Signaux de trading du Congrès américain

Avant de formuler les recommandations, collecter les achats récents des membres du Congrès pour identifier les tickers sur lesquels plusieurs élus ont investi. Ces signaux serviront de critère supplémentaire dans l'étape 5.

### 4bis-a. Scraping Capitol Trades

Lire le fichier `.env` pour récupérer `FINNHUB_API_KEY`. Calculer `DATE_FROM` = aujourd'hui − 30 jours (format `YYYY-MM-DD`).

Effectuer la requête suivante (ajouter un `User-Agent` navigateur réel) :

```bash
curl -s "https://www.capitoltrades.com/trades?txDate.gte=DATE_FROM&pageSize=96&page=1" \
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" \
  -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" \
  -H "Accept-Language: en-US,en;q=0.9"
```

- Si HTTP 429 : attendre 20 secondes et réessayer une fois.
- Si toujours bloqué : passer directement à l'étape 5 sans signal Congrès, noter `[Données Congrès indisponibles]` dans l'analyse.
- Récupérer **2 pages maximum** (pageSize=96), attendre 3 secondes entre chaque page.

### 4bis-b. Filtrage et classement

Garder uniquement les lignes où :
- Transaction = **Buy / Purchase** (ignorer les ventes, échanges, cadeaux)
- Asset type = **Stock** (ignorer Options, ETF, Crypto)
- Ticker = uniquement des lettres majuscules, 1 à 5 caractères

Grouper par ticker. Pour chaque ticker calculer :
- `buyCount` : nombre de parlementaires distincts ayant acheté
- `latestDate` : date d'achat la plus récente
- `politicians` : liste des noms

Trier par `buyCount` décroissant, puis `latestDate` décroissant. Garder le **top 5**.

### 4bis-c. Enrichissement Finnhub (si `FINNHUB_API_KEY` disponible)

Pour chacun des 5 tickers, récupérer les 2 dernières actualités :

```bash
curl -s "https://finnhub.io/api/v1/company-news?symbol=TICKER&from=DATE_FROM_7J&to=DATE_TODAY&token=FINNHUB_API_KEY"
```

### 4bis-d. Présentation du signal Congrès

Afficher le tableau suivant (bullets uniquement) :

```
SIGNAL CONGRÈS — TOP ACHATS (30 derniers jours)
─────────────────────────────────────────────────────────────────
- TICKER | N élus | Dernier achat | Élus | Actualité récente
- TICKER | N élus | ...
[ou : Données Capitol Trades indisponibles ce jour]
─────────────────────────────────────────────────────────────────
```

**Règle d'utilisation dans les recommandations :**
- Baromètre 1–3 : si un ticker du top Congrès est cohérent avec le contexte technique, le proposer en **trade prioritaire** (mentionner explicitement le signal Congrès comme raison)
- Baromètre 4 : mentionner les tickers en observation seulement, sans trade actif
- Baromètre 5–6 : ignorer les signaux haussiers du Congrès — le contexte de marché prime

---

## Étape 5 — Recommandations de trades (3 à 5 exemples précis)

En fonction du niveau de baromètre identifié **et des signaux Congrès collectés à l'étape 4bis**, propose **3 à 5 trades concrets** adaptés au contexte.

Pour chaque trade, format bullet points strict :

```
TRADE #N — [Stratégie] sur [Sous-jacent]
─────────────────────────────────────────────────────────────────
- Type        : [Achat ETF / Long stock / Covered Call / CSP /
                 Long Put / Bear Put Spread / Iron Condor / Collar…]
- Sous-jacent : [Ticker] — cours actuel ~[prix $]
- Pourquoi    :
    · [Raison 1 — ex: "Momentum haussier intact, au-dessus MA50"]
    · [Raison 2 — ex: "IV rank 45 % — prime vendeuse intéressante"]
    · [Raison 3 — ex: "Support fort à [prix] testé 3 fois"]
    · [Si applicable — ex: "Signal Congrès : 3 élus ont acheté récemment (Pelosi, Smith, Jones)"]

Si options :
- Expiration  : [Date — ex: 18 juil. 2026 / 45 DTE]
- Strike(s)   : [Niveaux — ex: "Put 480 / Call 510"]
- Prime       : [~X $ reçue / payée par contrat]
- Delta       : [~X total]
- Theta/j     : [~X $ / jour — si vendeuse]
- Breakeven   : [prix $] (hausse) / [prix $] (baisse si applicable)

Gestion :
- Entrée      : [Condition — ex: "QQQ > [prix] en clôture"]
- Cible       : [ex: "50 % du crédit reçu" / "+15 % sur le titre"]
- Stop-loss   : [ex: "Clôture sous MA50 / débit > 2× crédit reçu"]
- Taille      : [X–Y % du portefeuille]
─────────────────────────────────────────────────────────────────
```

### Règles de sélection des trades selon le baromètre

| Baromètre | Types de trades prioritaires |
|-----------|------------------------------|
| 1–2 | ETF larges (QQQ/SPY), stocks momentum, long calls OTM, CSP sur qualité |
| 3 | Covered calls sur positions existantes, Bull Call Spread, actions à dividende |
| 4 | Iron Condor, Straddle court terme, stratégies theta pure, cash-secured puts loin OTM |
| 5 | Protective Puts, Bear Put Spreads, Collar sur positions core, long VIX calls |
| 6 | Sortie de positions, puts directionnels, inverse ETF (SQQQ/SH), cash |

## Étape 6 — Synthèse exécutive

Tableau récapitulatif (format fixe — pas de prose autour) :

```
┌─────────────────────────────────────────────────────────────┐
│                  SYNTHESE MARCHE — [DATE]                    │
├─────────────────┬───────────────────────────────────────────┤
│ QQQ             │ [prix] ([variation 1 mois])                │
│ SPY             │ [prix] ([variation 1 mois])                │
│ VIX             │ [niveau] — [calme / tension / panique]     │
│ Tendance        │ [Haussière / Neutre / Baissière]           │
│ MA50 QQQ        │ [Au-dessus / En-dessous / Contact]         │
│ MA200 QQQ       │ [Au-dessus / En-dessous / Contact]         │
│ Sentiment       │ [Fear & Greed score + label]               │
├─────────────────┼───────────────────────────────────────────┤
│ BAROMETRE       │ Niveau [X]/6 — [LABEL]                     │
│ ATTITUDE        │ [Résumé en une phrase]                      │
├─────────────────┼───────────────────────────────────────────┤
│ Top trade       │ [Trade #1 résumé en une ligne]             │
│ Hedging         │ [Trade hedge résumé si applicable]         │
│ A éviter        │ [Ce qu'il ne faut PAS faire maintenant]    │
├─────────────────┼───────────────────────────────────────────┤
│ Prochains RDV   │ [2–3 événements clés à surveiller]         │
└─────────────────┴───────────────────────────────────────────┘
```

---

## Étape 7 — Persistance dans la base de connaissance Antora

Après avoir présenté l'analyse à l'utilisateur (étapes 2–6), crée le fichier AsciiDoc correspondant dans la base de connaissance.

### 7a. Créer le fichier d'analyse

Créer le fichier :
```
doc/modules/market-analysis/pages/market-analysis-YYYY-MM-DD.adoc
```
(remplacer YYYY-MM-DD par la date du jour réelle)

Le fichier doit respecter **exactement** la structure ci-dessous. Tout le contenu est en **français**. Respecter les règles AsciiDoc de `/maj-kb` (pas de Markdown, séparateurs `'''`, admonitions AsciiDoc, etc.).

#### Template du fichier à créer

```asciidoc
= Analyse de Marché — [Jour mois année en toutes lettres]
:description: [Résumé en une ligne : indices clés, baromètre, contexte macro principal]

xref:market-analysis:index.adoc[← Retour aux Analyses de Marché]

[cols="1,1,1,1,1,1"]
|===
| QQQ | SPY | VIX | Fear & Greed | MA50 QQQ | Baromètre

| [prix] ([YTD])
| [prix] ([YTD])
| [niveau] — [label calme/tension/panique]
| [score] — [label]
| [Au-dessus / Contact / En-dessous]
| *Niveau [X]/6 — [LABEL]*
|===

'''

== Baromètre du marché

._Niveau [X]/6 — [LABEL] : [justification courte]_
[mermaid]
....
xychart-beta
    title "Baromètre — [DATE]"
    x-axis ["1 Opport.", "2 Buy Dip", "3 Consol.", "4 Prudence", "5 Couvert.", "6 Danger"]
    y-axis "Actif" 0 --> 1
    bar [[0 partout sauf 1 au niveau actif — ex: [0,0,0,1,0,0] pour niveau 4]]
....

NOTE: [Explication en 2–3 phrases de pourquoi ce niveau. Relier aux conditions de marché actuelles.]

'''

== Analyse de l'évolution récente

=== Ce qui s'est passé (faits)

[Paragraphe factuel : indices sur 1 semaine / 1 mois, événements déclencheurs, secteurs.]

=== Pourquoi (causes profondes)

[Paragraphe sur les causes : Fed, macro, sentiment, risques structurels.]

=== Signaux techniques clés

[cols="1,1,1"]
|===
| Indicateur | Valeur | Signal

| QQQ cours | [prix $] | —
| MA50 QQQ | [prix $] | [Au-dessus / En-dessous] — [interprétation]
| MA200 QQQ | [prix $] | [Au-dessus / En-dessous] — [interprétation]
| Support clé | [prix $] | [description]
| Résistance clé | [prix $] | [description]
| RSI (si connu) | [valeur] | [suracheté / neutre / survendu]
|===

'''

== Perspectives à 4–8 semaines

=== Scénario haussier — Probabilité [X] %

*Conditions nécessaires* : [description].

*Cibles* : QQQ [target $], SPY [target $].

*Catalyseurs* : [liste].

=== Scénario baissier — Probabilité [X] %

*Conditions de déclenchement* : [description].

*Supports critiques* : QQQ [niveau $] (MA50), QQQ [niveau $] (MA200).

*Risques de queue* : [liste].

'''

== Recommandations de trades

NOTE: Ces recommandations sont à visée éducative. Adapter la taille des positions à votre tolérance au risque et à votre portefeuille réel.

=== Trade #1 — [Stratégie] sur [Ticker]

[cols="1,2"]
|===
| Paramètre | Valeur

| *Type* | [Stratégie]
| *Sous-jacent* | [Ticker] (~[prix] $)
| *Raisonnement* | [Pourquoi maintenant, pourquoi ce ticker]
| *Expiration* | [Date / DTE]
| *Strike(s)* | [Niveaux]
| *Prime reçue/payée* | [~X $ / contrat]
| *Delta total* | [~X]
| *Theta/jour* | [si applicable]
| *Breakeven(s)* | [X $]
| *Entrée* | [Condition]
| *Cible* | [Objectif de profit]
| *Stop-loss* | [Niveau ou condition]
| *Taille* | [X–Y % du portefeuille]
|===

[Répéter pour chaque trade #2, #3, #4, #5]

._[Stratégie Trade#1 en titre court] — P&L estimé à expiration_
[mermaid]
....
xychart-beta
    title "[Stratégie] sur [Ticker] — P&L estimé (par contrat)"
    x-axis ["[prix1]", "[prix2]", "[prix3]", "[prix4]", "[prix5]", "[prix6]", "[prix7]", "[prix8]"]
    y-axis "P&L ($)" [MIN] --> [MAX]
    bar [[valeurs P&L par contrat calculées]]
    line [[mêmes valeurs]]
....

NOTE: [Explication du graphique : plancher, plafond, breakeven.]

[Ajouter un diagramme P&L Mermaid pour au moins le trade principal (le plus complexe en options).]

'''

== Contexte macro et données clés

[cols="1,2"]
|===
| Indicateur macro | Valeur / Commentaire

| Taux Fed | [X,XX %] — [hausse / statu quo / baisse attendue]
| Prochain FOMC | [date] — [anticipation marché]
| CPI dernier | [+X,X % YoY] — [au-dessus / en-ligne / en-dessous target]
| NFP dernier | [+XXX K emplois] — [surpris / en-ligne / déçu]
| Taux 10 ans | [X,XX %]
| Put/Call ratio | [si connu]
|===

'''

== Événements à surveiller

[cols="1,1,1"]
|===
| Date | Événement | Impact potentiel

| [date] | [événement] | [Élevé / Modéré / Faible]
| [date] | [événement] | [Élevé / Modéré / Faible]
| [date] | [événement] | [Élevé / Modéré / Faible]
|===

'''

== Sources et liens utiles

[cols="1,3"]
|===
| Source | Description

| link:https://edition.cnn.com/markets/fear-and-greed[CNN Fear & Greed Index]
| Indicateur de sentiment de marché (0 = Peur extrême, 100 = Avidité extrême)

| link:https://www.cboe.com/tradable_products/vix/[CBOE VIX]
| Indice de volatilité officiel — données et futures

| link:https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html[CME FedWatch]
| Probabilités de décision Fed implicites dans les futures

| link:https://finance.yahoo.com/quote/QQQ/[QQQ — Yahoo Finance]
| Cours en temps réel, historique, options QQQ

| link:https://finance.yahoo.com/quote/%5EVIX/[VIX — Yahoo Finance]
| Cours VIX en temps réel

| [Autres sources utilisées pour cette analyse avec leur URL]
| [Description]
|===

'''

== Voir aussi dans la base de connaissance

* xref:ROOT:strategies/global-strategy.adoc[Stratégie Globale — Arbre de décision par phase de marché]
* xref:ROOT:hedging/index.adoc[Hedging — Guide complet de protection du portefeuille]
* xref:ROOT:hedging/vix-volatilite.adoc[VIX & Volatilité — Interpréter et utiliser le VIX]
* [Ajouter des xrefs vers les stratégies recommandées dans l'analyse — ex:]
* xref:ROOT:strategies/butterfly.adoc[Iron Butterfly — si recommandé dans les trades]
* xref:ROOT:strategies/wheel.adoc[Wheel / CSP — si recommandé dans les trades]
* xref:ROOT:hedging/bear-put-spread.adoc[Bear Put Spread — si recommandé dans les trades]
```

### 7b. Mettre à jour le nav du module market-analysis

Lire `doc/modules/market-analysis/nav.adoc` et **insérer** la nouvelle entrée en tête de la liste (sous la ligne de l'index), au format :

```asciidoc
** xref:market-analysis:market-analysis-YYYY-MM-DD.adoc[[Date courte — Baromètre Niveau X]]
```

Exemple :
```asciidoc
* xref:market-analysis:index.adoc[Analyses de Marché]
** xref:market-analysis:market-analysis-2026-06-09.adoc[9 juin 2026 — Niveau 4 Prudence]
```

### 7c. Mettre à jour l'index du module

Lire `doc/modules/market-analysis/pages/index.adoc` et ajouter une ligne dans le tableau des analyses disponibles :

```asciidoc
| xref:market-analysis:market-analysis-YYYY-MM-DD.adoc[[Date longue]]
| Niveau [X]/6 — [LABEL]
| [Haussière / Neutre / Baissière]
| [Résumé en 10 mots max du contexte macro ou de l'événement clé]
```

Remplacer la ligne `_Aucune analyse enregistrée pour l'instant._` si c'est la première entrée, sinon ajouter une ligne.

### 7d. Règles de style spécifiques au fichier d'analyse

- **Langue** : français intégral — y compris les admonitions (`NOTE:`, `TIP:`, `WARNING:`, `IMPORTANT:`)
- **Format** : AsciiDoc strict — pas de Markdown (`*gras*` pas `**gras**`, `'''` pas `---`, `=` pas `#`)
- **Diagrammes** : au moins 1 diagramme Mermaid obligatoire (baromètre) + 1 pour le trade principal si c'est une stratégie options avec un P&L défini
- **Liens externes** : utiliser `link:URL[Texte]` pour les sources et sites externes
- **Liens internes** : utiliser `xref:ROOT:section/page.adoc[Texte]` pour les pages de la KB (préfixe `ROOT:` obligatoire depuis le module `market-analysis`)
- **Données approximatives** : si un cours ou une prime est estimé, le signaler avec `~` et une note `footnote:[Estimation — vérifier les cours réels avant d'entrer en position.]`
- **Avertissement** : la section "Recommandations de trades" doit *toujours* commencer par la `NOTE:` éducative

### 7e. Vérification finale

Après création des fichiers, lancer le build Antora pour valider qu'il n'y a pas d'erreurs :

```
npm run build
```

Si le build échoue, corriger les erreurs de syntaxe avant de passer à l'étape suivante.

### 7f. Commit et push

Une fois le build validé, committer et pousser tous les fichiers modifiés :

```bash
git add doc/modules/market-analysis/pages/market-analysis-YYYY-MM-DD.adoc \
        doc/modules/market-analysis/nav.adoc \
        doc/modules/market-analysis/pages/index.adoc

git commit -m "/analyse-market : YYYY-MM-DD — Niveau [X]/6 [LABEL]"

git push origin main
```

Remplacer `YYYY-MM-DD` par la date du jour réelle et `[X]/6 [LABEL]` par le baromètre effectif (ex : `3/6 Consolidation`).

Si le push échoue (erreur SSL ou credentials), signaler l'erreur à l'utilisateur avec la commande exacte à relancer manuellement — ne pas bloquer le rapport final.

---

**Note générale :** Toutes les recommandations sont à visée éducative. Adapter la taille des positions à votre tolérance au risque et à la composition de votre portefeuille réel.
