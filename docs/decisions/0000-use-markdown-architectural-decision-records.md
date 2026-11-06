---
status: accepted
date: 2026-11-06
decision-makers: Project owner (chrisnkad), Claude Code
---

# Use Markdown Architectural Decision Records (MADR 4.0)

## Context and Problem Statement

The Upward Calling rebuild runs in phases (setup, research, design system, templates), with the
owner approving between phases. Design and technical choices made early (what the site is for,
section order, tokens, stack) need to stay explainable later. Which format should these records
follow?

## Decision Drivers

* The owner asked for "ADR style" documentation using the best available ADR template on GitHub.
* Records must be plain Markdown that lives in the repo and diffs cleanly.
* The format should capture options and trade-offs, not just the outcome.

## Considered Options

* [MADR 4.0.0](https://github.com/adr/madr) – Markdown Architectural Decision Records
* [Michael Nygard's template](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) – the original ADR format
* Y-Statements ([Sustainable Architectural Decisions](https://www.infoq.com/articles/sustainable-architectural-design-decisions))
* Formless notes

## Decision Outcome

Chosen option: "MADR 4.0.0", because it is the most widely adopted, actively maintained ADR
template on GitHub (the default template at adr.github.io), it records options and their pros and
cons, and its optional sections let small decisions stay short.

### Consequences

* Good, because every phase leaves a short, reviewable trail of why things look the way they do.
* Good, because the template (`adr-template.md`) is vendored, so new records need no network access.
* Bad, because it adds a little writing overhead to each decision.

### Confirmation

Each phase report links the ADRs it added. New records copy `docs/decisions/adr-template.md`
and use the next free four-digit number.

## More Information

* Template source: `adr/madr` @ `ba75bb1` (2026-08-28), licensed MIT OR CC0-1.0.
* Index of records: [README.md](README.md).
