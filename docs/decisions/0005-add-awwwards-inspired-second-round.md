---
status: proposed
date: 2026-11-06
decision-makers: Project owner (chrisnkad), Christen Mazura-Morris (client chooses the design)
consulted: Claude Code
---

# Add a second round of previews inspired by Awwwards

## Context and Problem Statement

The owner asked for five more home page designs, using ideas found on
[Awwwards](https://www.awwwards.com/), shown as Round 2 on the chooser page. The first five
([ADR-0004](0004-offer-five-design-directions.md)) become Round 1.

## Decision Drivers

* Bolder options to compare with Round 1, which follows conventional service-site patterns.
* Ideas must be adapted to Christen's own content, not copied from any winning site.
* The approved section order ([ADR-0003](0003-career-home-page-section-order.md)) still applies.
* The UI/UX Pro Max skill keeps choosing the colors, as the owner asked in Round 1.

## Decision Outcome

Five more static pages in `previews/`, listed under Round 2 in `previews/index.html`.

| Design | Pattern seen on Awwwards | Example seen | Palette (UI/UX Pro Max result) | Fonts |
|---|---|---|---|---|
| `6-collage` | Oversized condensed type among scattered images | VIV | Magazine/Blog: black + pink | Anton, Instrument Sans |
| `7-portfolio` | Tilted floating products, curved type, framed panels | Agrumea Farm | Brewery/Winery: burgundy + gold | Gloock, DM Sans |
| `8-portrait` | Cinematic full-screen portrait on black | King River | Photography Studio: black + white | Bodoni Moda, Jost |
| `9-index` | Small statement above a giant wordmark, strict grid | MECHA, Grids | Academic Journal: navy + gold | Newsreader, Archivo |
| `10-sketchbook` | Hand-drawn line illustration | Don't Look Up | Food Delivery: orange + blue | Dela Gothic One, Figtree, Caveat |

The product names show where each palette came from, not what the design is for. The examples are
only for reference: no layout, text, image or code was taken from them.

### Consequences

* Good, because Christen can compare safer and bolder directions side by side.
* Bad, because ten options are harder to choose from than five. Christen may need a shortlist.
* Neutral: Round 2 headlines are drawn from her site's wording, except "Let's move your mountain",
  which adapts her "Moving My Mountains" package name. She should confirm whichever she picks.

### Confirmation

Christen picks one design from either round, and this ADR and ADR-0004 are updated with the choice.
Each page was checked at 375, 768 and 1440 px for horizontal scrolling and computed text contrast of
at least 4.5:1 (3:1 for large text).
