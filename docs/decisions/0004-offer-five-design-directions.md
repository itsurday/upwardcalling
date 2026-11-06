---
status: proposed
date: 2026-11-06
decision-makers: Project owner (chrisnkad), Christen Mazura-Morris (client chooses the design)
consulted: Claude Code
---

# Offer five design directions as static home page previews

## Context and Problem Statement

Phase 3 needs colors, fonts and a visual direction. The owner asked for five one-page previews,
hosted on Vercel, so that Christen can choose one. Hosting for the real site is still undecided.

## Decision Drivers

* Christen should judge real pages with her own content, not color swatches.
* Owner direction: the UI/UX Pro Max skill chooses the colors.
* Previews must deploy to Vercel without a build step and move easily into any later stack.
* Every design follows the section order in [ADR-0003](0003-career-home-page-section-order.md).

## Decision Outcome

Five static HTML and CSS home pages in `previews/`, with a chooser page at `previews/index.html`.
`vercel.json` serves that folder.

| Design | Palette (UI/UX Pro Max result) | Fonts | Idea |
|---|---|---|---|
| `1-ascent` | Church/Religious Organization: purple + gold | Cormorant Garamond, Libre Baskerville | Mountain ridges and chevrons from the logo |
| `2-resume` | B2B Service (the `--design-system` result): navy + blue | EB Garamond, Lato | Laid out like one of her resumes |
| `3-trail` | LMS ("education career" search): teal + amber | Outfit, Work Sans | A process that climbs the page |
| `4-letter` | Recipe & Cooking App ("coaching warm trustworthy" search): terracotta + green | Fraunces, Nunito Sans | A personal note from Christen |
| `5-summit` | Podcast Platform ("coaching warm trustworthy" search): dark indigo + orange | Bricolage Grotesque, Rubik | The tagline as an oversized headline |

The skill has no career-coaching palette, so these come from its closest color searches. The
product names above are where each palette came from, not what the design is for.

### Consequences

* Good, because Christen compares five complete pages using her real content.
* Good, because the chosen design's tokens become the design system for Phase 4.
* Bad, because each page repeats the same content; the four designs not chosen get deleted.
* Neutral: forms in the previews send nothing. `previews/assets/preview.js` handles that and adds
  the preview bar. Remove it when a design moves to the real site.
* Neutral: the Photography footer link points to the current Wix page until `/photo` exists.

### Confirmation

Christen picks one design, and this ADR is updated with the choice. Each page was checked at 375,
768 and 1440 px for horizontal scrolling and computed text contrast of at least 4.5:1 (3:1 for
large text).
