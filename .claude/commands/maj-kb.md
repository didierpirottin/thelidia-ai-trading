Analyse tous les fichiers du répertoire `raw/` et mets à jour la base de connaissance Antora dans `doc/`.

## Étape 1 — Scanner le contenu de raw/

Lis tous les fichiers de `raw/` récursivement :
- `.md`, `.txt`, `.adoc` — notes textuelles et analyses
- `.url` — références URL (parse les champs : titre, url, description, tags)
- Tout autre fichier texte contenant du contenu

## Étape 2 — Catégoriser et associer aux sections de doc/

Pour chaque contenu, détermine la section cible :
- Analyse d'actions, analyse fondamentale/technique → `doc/modules/ROOT/pages/actions/`
- Concepts options, grecs, calls/puts → `doc/modules/ROOT/pages/options/`
- Stratégies de trading (covered call, CSP, spreads, condors…) → `doc/modules/ROOT/pages/strategies/`
- Hedging, protection de portefeuille → `doc/modules/ROOT/pages/hedging/`
- Gestion de portefeuille, position sizing, risque → `doc/modules/ROOT/pages/portfolio/`
- Outils, liens, vidéos, livres → `doc/modules/ROOT/pages/ressources/`

## Étape 3 — Rédiger la documentation selon les règles de style

### Langue et niveau
- **Tout le contenu est rédigé en français.**
- Le niveau cible est **débutant** : explique chaque concept comme si le lecteur le découvrait pour la première fois.
- Utilise des analogies concrètes pour les concepts abstraits (ex. : "le put, c'est une assurance").
- Commence chaque nouvelle notion par une définition en une phrase, puis développe.

### Structure de chaque page ou section thématique
Chaque stratégie, concept ou technique doit systématiquement inclure :
1. **Définition** — une phrase claire, une analogie si utile
2. **Comment ça fonctionne** — mécanique détaillée
3. **Schéma P&L ASCII** (pour les stratégies options/actions) — voir format ci-dessous
4. **Exemple chiffré complet** — tableau avec plusieurs scénarios de prix (au moins 6 niveaux : forte baisse, baisse, légère baisse, neutre, légère hausse, forte hausse)
5. **Quand l'utiliser** — tableau deux colonnes "Situation favorable / Situation défavorable"
6. **Avantages et inconvénients**
7. **Règles pratiques ou optimisations**

En fin de page :
- **Tableau comparatif** si la page couvre plusieurs stratégies ou variantes
- **Guide décisionnel** en arbre ASCII si plusieurs choix sont possibles
- **Références** — liens issus de raw/
- **Voir aussi** — xrefs vers les pages liées

### Format AsciiDoc obligatoire
- Ne jamais ajouter de table des matières (`:toc:`) dans les pages — la navigation Antora est suffisante
- Séparateurs de sections : `'''` (trois apostrophes) — **jamais** `---` (syntaxe Markdown)
- Admonitions : `TIP:`, `NOTE:`, `WARNING:`, `IMPORTANT:`, blocs `[example]` pour les exemples chiffrés
- Tableaux : toujours avec `[cols="..."]` pour contrôler les largeurs
- Diagrammes ASCII : dans des blocs `----` avec titre et légende
- Références sources : `footnote:[Source: <url ou nom de fichier>]`
- Liens croisés : `xref:section/page.adoc[Texte du lien]`
- **Ne jamais utiliser de syntaxe Markdown** (pas de `**gras**` Markdown, utiliser `*gras*` AsciiDoc ; pas de `---`, pas de `#` pour les titres)

### Diagrammes P&L avec Mermaid xychart-beta

Pour toute stratégie options ou de couverture, utilise un diagramme Mermaid `xychart-beta`
**à la place des schémas ASCII** (qui ne sont pas rendus graphiquement).

La syntaxe est la suivante :

```asciidoc
.Légende décrivant la stratégie et ses paramètres (strikes, prime, breakeven)
[mermaid]
....
xychart-beta
    title "Nom de la stratégie — P&L total à expiration (par contrat de 100 actions)"
    x-axis ["Prix1 $", "Prix2 $", "Prix3 $", ...]
    y-axis "P&L ($)" MIN --> MAX
    bar [valeur1, valeur2, valeur3, ...]
    line [valeur1, valeur2, valeur3, ...]
....
```

Règles pour les diagrammes P&L :
- Inclure au minimum 6 à 8 points de prix sur l'axe X : forte baisse, baisse, strike bas, prix d'entrée, breakeven, hausse modérée, forte hausse
- Les valeurs de `bar` et `line` doivent être identiques (la line trace la courbe sur les barres)
- Calculer les valeurs P&L en *dollars par contrat* (× 100 actions), pas par action
- Choisir les bornes de l'axe Y (`MIN --> MAX`) avec une marge de 20–30 % au-delà des extremes réels
- Toujours ajouter une `NOTE:` après le diagramme pour expliquer les points clés (plancher, plafond, breakeven)

Exemple concret (Protective Put, action 100 $, put strike 95 $, prime 3 $) :

```asciidoc
._100 actions à 100 $, Put strike 95 $, prime 3 $, breakeven 103 $_
[mermaid]
....
xychart-beta
    title "Protective Put — P&L total à expiration (par contrat de 100 actions)"
    x-axis ["70 $", "80 $", "90 $", "95 $", "100 $", "103 $", "110 $", "120 $"]
    y-axis "P&L ($)" -1200 --> 2000
    bar [-800, -800, -800, -800, -300, 0, 700, 1700]
    line [-800, -800, -800, -800, -300, 0, 700, 1700]
....

NOTE: La barre est plate quelle que soit l'ampleur de la baisse : c'est le *plancher de protection*.
```

**Important** : Ne jamais utiliser de blocs `----` pour des schémas P&L graphiques.
Les blocs `----` restent autorisés uniquement pour les arbres de décision textuels et les formules.

### Format des tableaux d'exemples chiffrés
Toujours inclure au minimum ces colonnes pour une stratégie options :

```
[cols="1,1,1,1,1"]
|===
| Prix à expiration | P&L composant 1 | P&L composant 2 | P&L Total | Commentaire
| ...
|===
```

Inclure des lignes couvrant : forte baisse (–30 %), baisse (–15 %), strike bas, prix d'entrée, breakeven, hausse modérée, forte hausse.

### Tableaux comparatifs
Quand une page couvre plusieurs stratégies, conclure avec :

```
[cols="1,1,1,1,1,1"]
|===
| Stratégie | Coût | Complexité | Protection | Gain limité ? | Idéale pour
| ...
|===
```

### Guides décisionnels
Représenter les arbres de décision en ASCII dans un bloc `----` :

```
----
  Votre situation                          Stratégie recommandée
  ──────────────────────────────────────────────────────────────
  Condition A
  ├── Sous-condition 1                   → Stratégie X
  └── Sous-condition 2                   → Stratégie Y
----
```

## Étape 4 — Mettre à jour la navigation

Si de nouvelles pages ont été créées, ajoute-les dans `doc/modules/ROOT/nav.adoc`.

## Étape 5 — Rendre compte des changements

Après mise à jour, résume :
- Quels fichiers raw ont été traités
- Quelles pages doc ont été créées ou modifiées
- Tout contenu ambigu ou impossible à catégoriser
