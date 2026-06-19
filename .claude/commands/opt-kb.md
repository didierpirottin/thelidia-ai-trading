Optimise la base de connaissance Antora existante dans `doc/` : cohérence, liens croisés, navigation, schémas P&L manquants et qualité rédactionnelle.
Ne modifie **jamais** les fichiers de `raw/` — ils sont en lecture seule pour cette commande.
Respecte en tout point les règles de style et de format définies dans `/maj-kb`.

## Étape 1 — Inventaire complet de doc/

Lis récursivement tous les fichiers `.adoc` de `doc/modules/ROOT/pages/` et `doc/modules/ROOT/nav.adoc`.

Pour chaque page, construis mentalement une fiche d'audit avec :
- Titre et section d'appartenance
- Présence d'un breadcrumb (lien retour vers l'index de la section)
- Présence d'une section "Voir aussi" avec xrefs
- Présence d'un diagramme P&L Mermaid (obligatoire pour toute stratégie options)
- Présence d'un tableau d'exemples chiffrés (au moins 6 scénarios)
- Présence d'un tableau "Quand l'utiliser" (Favorable / Défavorable)
- Présence d'un tableau "Avantages / Inconvénients"
- Présence d'un guide décisionnel (pour les pages index et overview)
- Pages référencées dans nav.adoc mais absentes du disque
- Pages présentes sur le disque mais absentes de nav.adoc

## Étape 2 — Audit des liens croisés

### 2a. Liens orphelins
Repère toute page non référencée dans nav.adoc ET non liée depuis aucune autre page.
Ajoute-la à nav.adoc et ajoute un xref depuis la page parent logique.

### 2b. Concepts non liés
Dans chaque page, identifie les mentions de concepts ou stratégies qui ont une page dédiée dans `doc/` mais qui ne sont pas encore des xrefs.

Exemples de patterns à corriger :
- "le Protective Put" mentionné sans `xref:hedging/protective-put.adoc[Protective Put]`
- "le VIX" mentionné sans `xref:hedging/vix-volatilite.adoc[VIX]`
- "Delta" mentionné sans `xref:options/index.adoc[Delta]`
- "Iron Condor" mentionné sans xref vers sa page

Ajoute le xref au premier usage du terme dans chaque page (pas à chaque occurrence).

### 2c. Sections "Voir aussi" incomplètes
Pour chaque page, vérifie que la section "Voir aussi" couvre :
- La page parent (index de la section)
- Les pages directement liées par le contenu
- Les pages des sections adjacentes pertinentes

Ajoute les xrefs manquants.

## Étape 3 — Diagrammes P&L manquants

Toute page décrivant une stratégie options *sans* diagramme Mermaid `xychart-beta` doit en recevoir un.

Pour chaque diagramme à créer :
1. Choisir un exemple chiffré représentatif (strikes, prime, breakeven)
2. Calculer le P&L par contrat (×100 actions) pour 6 à 8 niveaux de prix
3. Respecter scrupuleusement la syntaxe `xychart-beta` de `/maj-kb`
4. Ajouter la légende (`.titre_`) et la `NOTE:` explicative après le bloc

Stratégies qui doivent avoir un diagramme si elles n'en ont pas :
- Covered Call
- Bull Call Spread / Bear Put Spread
- Iron Condor
- Straddle / Strangle
- Toute stratégie de hedging sans schéma

## Étape 4 — Cohérence rédactionnelle

### 4a. Structure manquante
Pour chaque page de stratégie ou de concept qui manque d'une ou plusieurs sections obligatoires (voir `/maj-kb` Étape 3), ajoute les sections manquantes :
- Définition en une phrase + analogie
- Comment ça fonctionne
- Exemple chiffré (tableau ≥ 6 scénarios)
- Quand l'utiliser (tableau Favorable / Défavorable)
- Avantages / Inconvénients
- Règles pratiques

### 4b. Format AsciiDoc
Corrige toute violation de format :
- Remplace `**gras**` (Markdown) par `*gras*` (AsciiDoc)
- Remplace `---` par `'''` comme séparateur de section
- Remplace `#` titre par `=` titre AsciiDoc
- Supprime `:toc: left` / `:toclevels:` si présents — ne jamais mettre de table des matières dans les pages
- Ajoute `[cols="..."]` sur les tableaux qui n'en ont pas

### 4c. Niveau débutant
Vérifie que chaque concept abstrait est accompagné d'une analogie concrète.
Si une analogie manque sur un terme technique clé (Delta, Gamma, IV, Theta, etc.), ajoute-en une.

### 4d. Terminologie cohérente
Homogénéise les termes entre les pages :
- "volatilité implicite" ou "IV" → choisir le terme principal et mettre l'autre entre parenthèses au premier usage
- "seuil de rentabilité" ou "breakeven" → idem
- "prime" ou "crédit" → distinguer clairement selon le contexte (achat vs vente)

## Étape 5 — Navigation globale

### 5a. Vérification de nav.adoc
- Toutes les pages existantes dans `doc/modules/ROOT/pages/` sont-elles référencées ?
- Les sous-pages sont-elles bien imbriquées sous leur section parent avec `**` ?
- L'ordre est-il logique (overview avant sous-pages) ?

Corrige nav.adoc si nécessaire.

### 5b. Breadcrumbs
Chaque sous-page doit commencer par un breadcrumb :

```asciidoc
xref:<section>/index.adoc[← Retour à <nom de la section>]
```

Ajoute les breadcrumbs manquants.

### 5c. Page d'accueil (index.adoc racine)
Vérifie que `doc/modules/ROOT/pages/index.adoc` :
- Présente une vue d'ensemble du site avec un lien vers chaque section principale
- Est à jour avec toutes les sections existantes

## Étape 6 — Guides décisionnels sur les pages index

Toute page `index.adoc` de section (strategies, hedging, options, portfolio, actions, ressources) doit avoir un guide décisionnel en arbre ASCII si elle couvre plusieurs sous-stratégies ou sous-concepts.

Format obligatoire (bloc `----`) :

```
----
  Votre situation                          Stratégie recommandée
  ──────────────────────────────────────────────────────────────
  Condition A
  ├── Sous-condition 1                   → Stratégie X
  └── Sous-condition 2                   → Stratégie Y
----
```

Si le guide décisionnel est absent ou incomplet, créez-le ou complétez-le.

## Étape 7 — Tableaux comparatifs sur les pages index

Toute page `index.adoc` qui liste plusieurs stratégies ou sous-concepts doit avoir un tableau comparatif en fin de page.

Format :

```asciidoc
[cols="1,1,1,1,1,1"]
|===
| Stratégie | Coût | Complexité | Protection | Gain limité ? | Idéale pour
| ...
|===
```

Ajoute ou complète ces tableaux si absents.

## Étape 8 — Rendre compte des optimisations

Après toutes les modifications, produis un rapport structuré :

```
### Pages modifiées
- <fichier> : <liste des améliorations apportées>

### Diagrammes ajoutés
- <fichier> : <stratégie> — <paramètres de l'exemple>

### Liens croisés ajoutés
- <fichier> : <N> xrefs ajoutés vers <pages cibles>

### Problèmes non résolus
- <description de tout contenu ambigu ou amélioration impossible sans données supplémentaires>
```
