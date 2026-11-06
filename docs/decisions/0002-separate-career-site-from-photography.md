---
status: accepted
date: 2026-11-06
decision-makers: Project owner (chrisnkad)
consulted: Claude Code
informed: Christen Mazura-Morris (client) — pending
---

# Build a dedicated Career Services site; move Photography to a separate project

## Context and Problem Statement

upwardcalling.com currently serves two unrelated audiences from one Wix site:

* **Career services:** resume, cover letter and LinkedIn writing plus career, job-search and
  interview coaching, for job seekers.
* **Photography:** child, family, headshot, personal-branding and school portraits, for parents
  and schools.

The home page hero offers both ("CAREER SERVICES" / "PHOTOGRAPHY" buttons), but everything below
it is career content. The Photography nav item links back to the home page. Photography lives on
a separate page (`/services-9`) with its own nav, Facebook link and testimonials. Should the new
site keep both, or split them?

## Decision Drivers

* A page should have one main job. The career audience needs to book a free Career Connection Call.
  The photography audience needs to book a session or order school pictures.
* The two services need different trust signals (PARWCC credentials and job outcomes versus
  portfolio, magazine features and a People's Choice award) and different imagery.
* Every career-service reference site studied is single-purpose (see `docs/layout-research.md`).
* Owner direction: "focus Career Services first; Photography can be taken to another site."

## Considered Options

* One site with two equal sections (current approach)
* One career-led site with a small Photography page
* Two sites: Career Services now, Photography as a later project

## Decision Outcome

Chosen option: "Two sites: Career Services now, Photography as a later project", because it
gives each audience one clear path to booking and matches the owner's direction.

### Consequences

* Good, because the career home page can be built around one conversion: the free call.
* Good, because copy, imagery and credentials can stay on-message (resumes and coaching, faith-focused).
* Neutral: the career footer keeps a single "Photography" link out to the future site, so existing
  photography clients aren't stranded.
* Bad, because the client must decide domains. **Client to supply:** whether the career site keeps
  `upwardcalling.com` and photography moves (for example to a subdomain or new domain), and the
  photography URL to link to.
* Bad, because existing photography URLs (for example `/services-9`, school-picture ordering) will
  need redirects once the photography site exists.

### Confirmation

The Phase 4 home page contains no photography content apart from one footer link.

## More Information

* Current content capture: `docs/research/current-site-content.md`.
* Revisit when the photography project starts.
