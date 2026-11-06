---
status: proposed
date: 2026-11-06
decision-makers: Project owner (chrisnkad)
consulted: Claude Code
informed: Christen Mazura-Morris (client) — pending
---

# Career home page: trust-led, single-CTA section order

## Context and Problem Statement

The current home page opens on a low-contrast purple hero that splits visitors between two
businesses. It then repeats "Schedule your free Career Connection Call" after long blocks of
centered text and a 17-card price grid. What section order should the new Career Services home
page use, so that a job seeker trusts Christen and books the free call?

## Decision Drivers

* One conversion: book the free Career Connection Call (see `docs/layout-research.md` §1).
* Patterns found across 6 reference sites (§3), and the anti-patterns (§4).
* UI/UX Pro Max `landing` patterns "Hero + Testimonials + CTA" and "Trust & Authority + Conversion" (§5).
* Reuse the client's existing, proven copy. Invent no facts.
* Mobile first: the current site is not responsive.

## Considered Options

* **A. Trust-led single-CTA page:** Hero with founder and credentials, proof strip, problem, outcomes, services overview, process, testimonials, about, samples, FAQ, final CTA and form, footer
* **B. Pricing-first page:** Hero, full price grid, process, testimonials (closest to today's layout)
* **C. Content hub:** Hero, lead magnet, resources/blog, services (Happen To Your Career style)

## Decision Outcome

Proposed option: "A. Trust-led single-CTA page", because it matches what the strongest solo-practice
references do (Thomas Career Consulting, Strategic Career Coaches), follows both relevant UI/UX
Pro Max landing patterns, and uses content Christen already has. Full table with reasons:
`docs/layout-research.md` §6.

### Consequences

* Good, because every scroll depth has the same clear next step.
* Good, because pricing stays transparent (3 grouped cards) without the 17-card wall.
* Good, because each section maps to a reusable template for Phase 4 (hero, proof strip,
  feature grid, steps, testimonials, CTA band, contact form, content page).
* Bad, because the full price list moves to the Services page, one click deeper.
* Bad, because option C's lead-generation benefit is lost. Christen has no lead magnet today, so
  this can be revisited later.

### Confirmation

Owner approval at the Phase 2 checkpoint. After Phase 4: the home page matches §6, the primary
CTA appears in the header, the hero and the final band, and nothing on the page is unsourced
(every fact traces to `docs/research/current-site-content.md` or is marked **[CLIENT TO SUPPLY]**).

## Pros and Cons of the Options

### A. Trust-led single-CTA page

* Good, because credentials and a face come first, which is what sells a solo practice.
* Good, because the problem → outcome → proof → ask sequence is used by 3 of the 5 visual references.
* Neutral, because it makes for a longer page, mitigated by short sections and an FAQ.

### B. Pricing-first page

* Good, because it's familiar to returning visitors.
* Bad, because it asks for money before establishing trust, which is the current site's weakness.

### C. Content hub

* Good, because it's good for SEO over time.
* Bad, because it needs ongoing content Christen doesn't publish today, and it dilutes the single CTA.

## More Information

Research and screenshots: `docs/layout-research.md`, `docs/research/screenshots/`.
Revisit if Christen adds a lead magnet, a blog or online booking.
