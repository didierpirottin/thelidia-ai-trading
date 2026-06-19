# Notes brutes — Matière première de la base de connaissance

Déposez ici vos notes, documents et références. Lancez `/maj-kb` depuis Claude Code pour que la documentation Antora dans `doc/` soit mise à jour.

## Formats acceptés

| Format | Usage |
|--------|-------|
| `.md` / `.txt` / `.adoc` | Notes textuelles, résumés, analyses |
| `.url` | Références vers des URLs (voir format ci-dessous) |
| `.pdf` | Documents PDF |

## Format des fichiers `.url`

```
titre: Nom de la ressource
url: https://...
description: Brève description du contenu
tags: options, greeks, stratégie
```

## Conventions de nommage suggérées

- `AAAA-MM-JJ-sujet.md` — notes datées
- `video-titre.url` — référence vidéo YouTube ou autre
- `article-titre.md` — résumé d'article

## Sous-répertoires suggérés

Vous pouvez organiser vos notes par thème :

- `actions/` — notes sur les actions
- `options/` — notes sur les options
- `strategies/` — stratégies de trading
- `hedging/` — couverture de portefeuille
- `portfolio/` — gestion de portefeuille
