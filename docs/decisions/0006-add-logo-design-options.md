---
status: proposed
date: 2026-11-06
decision-makers: Project owner (chrisnkad), Christen Mazura-Morris (client chooses the logo)
consulted: Claude Code
---

# Offer five logo options, using the logo-design skill

## Context and Problem Statement

The current logo's wide shape, hairline monogram and small gold slivers disappear at small sizes, and
its name is set in plain stock type. Before the next phase the owner asked for logo options, some based
on the existing logo and some from scratch, using the
[logo-design skill](https://github.com/kaankiziltug/logo-design-skill), with only the best shown.

## Decision Drivers

* Keep what people may already recognize: the mountain, purple and gold, and the U and C.
* Work from a 16 px browser icon to a business card, in one color and reversed.
* One clear idea each, explainable in a sentence.

## Decision Outcome

Options in `previews/logos/`, listed under Logo Designs on the chooser page.

| Logo | Source | Idea | Lockup font (SIL Open Font License) |
|---|---|---|---|
| `link` | Current logo | Her U and C, bold and linked, overlapping in a small fish shape | Young Serif |
| `rising-range` | Current logo | Her mountain, simplified, with gold chevrons on the main peak | Figtree |
| `summit-u` | Scratch | A U with a climbing top edge and a gold summit inside | Figtree |
| `peak-wordmark` | Scratch | The name in capitals, with each A drawn as a peak | Outfit |

Colors are `#392C61` and `#F2B800`, matched by eye to the current logo, not taken from a brand guide.
All files are vector paths with no live text, masks or filters.

The owner then asked for a fifth option, `original-gold-c.png`: her original logo file with only the C
recolored to the peaks' exact gold (`#F8C304`). It is a PNG with a white background, so it has no
reversed version. A vector version will only be drawn if this option is chosen.

Tried and rejected:

* Bold mountain with a UC inside: cramped, and the U read as a Y.
* Mountain with a pen-nib slit: read as a thermometer, then as a heart on a string.
* Pen nib: clip art, then a bat once mountains were cut into it.
* Compass C: its up and down triangles read as a sort icon.
* Plain rising U: no idea left once the Summit U existed.

The skill is installed in `.claude/skills/logo-design/` (MIT, version 1.4.5). See
[ADR-0001](0001-use-project-scoped-design-skills.md) for why skills are kept in the repo.

### Consequences

* Good, because Christen can compare evolution and fresh starts side by side.
* Bad, because the skill adds about 14 MB to the repo, mostly a study library of about 1,400 other
  companies' logos. Those stay their owners' trademarks and must never be copied or published.
* Neutral: the home page previews still use her current logo until she chooses.
* Neutral: the skill's full logo kit (favicons, guidelines, final colors, small-size cuts) waits until
  she picks a direction.

### Confirmation

Christen picks one logo and this ADR is updated. Before it is used commercially, a professional
trademark search is still needed, because the automated checks cannot clear a mark.
