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
| `original-gold-c` | Current logo | Her logo redrawn, with the C in gold | Open Sans |
| `link` | Current logo | Her U and C linked, with an opening that hints at a fish | Young Serif |
| `rising-range` | Current logo | Nested peaks spreading outward, like a call rising | Outfit |
| `summit-u` | Scratch | A U with a climbing top edge and a gold summit inside | Figtree |
| `peak-wordmark` | Scratch | The name in capitals, with each A drawn as a peak | Outfit |

All files are vector paths with no live text, masks or filters.

The owner then asked for a fifth option, `original-gold-c`: her original logo with the C in the peaks' gold.

After review the owner found the set not yet professional, so all five were redrawn: exact colors sampled
from her file (`#372B62`, `#F8C304`) with flat shades for folds and facets, a real interlaced ribbon for
`link`, nested peaks for `rising-range`, a faceted summit on the stem-top line for `summit-u`, pointed As
for `peak-wordmark`, and clean vector artwork with a bolder monogram for `original-gold-c`.

A third revision followed research into strong logos (simplicity, negative space, few colors, custom type):
`link` lost its shading and keeps the U whole so it reads at once, `summit-u` got a bigger peak with one clean
facet, `peak-wordmark` went to one gold with lines tightened so the lower A rises under the P's bowl, and
`rising-range` got tighter bands. Earlier versions are kept in `docs/logo-backups/`, outside the published
site.

Tried and rejected:

* Bold mountain with a UC inside: cramped, and the U read as a Y.
* Mountain with a pen-nib slit: read as a thermometer, then as a heart on a string.
* Pen nib: clip art, then a bat once mountains were cut into it.
* Compass C: its up and down triangles read as a sort icon.
* Plain rising U: no idea left once the Summit U existed.
* Flat chevron tiers for Rising Range: read as a house roof or pagoda.
* Interlaced Link with a cut U stem, once its shading was removed: read as "l c".

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
