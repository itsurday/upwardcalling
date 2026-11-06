---
status: accepted
date: 2026-11-06
decision-makers: Project owner (chrisnkad)
consulted: Claude Code
---

# Use project-scoped design skills (frontend-design + UI/UX Pro Max)

## Context and Problem Statement

The rebuild should be guided by repeatable design knowledge rather than ad-hoc taste. Which
skills should Claude Code use, and where should they live so that anyone opening this repo gets
the same guidance?

## Decision Drivers

* Same behavior for every contributor and every session (cloud or local).
* Skill files should match their upstream sources exactly, so updates are easy to diff.
* Commits should be small and reviewable.

## Considered Options

* Vendor the skills into `.claude/skills/` (project scope)
* Rely on user-level installs only (`~/.claude/skills` or plugins per person)

## Decision Outcome

Chosen option: "Vendor the skills into `.claude/skills/`", because it is the only option that
makes the guidance part of the repo itself.

Installed:

| Skill(s) | Source | How |
|---|---|---|
| `frontend-design` (SKILL.md, LICENSE.txt) | `anthropics/skills`, `skills/frontend-design` on `main` | `curl` of the raw files |
| `ui-ux-pro-max`, `design`, `design-system`, `brand`, `ui-styling`, `banner-design`, `slides` | `nextlevelbuilder/ui-ux-pro-max-skill` | `uipro init --ai claude` (ui-ux-pro-max-cli 2.15.0) |

`.gitattributes` forces LF line endings for `.claude/skills/**` so files stay byte-identical with
upstream on every OS.

### Consequences

* Good, because the skills are versioned with the project and load automatically.
* Good, because the two installs are separate commits (`chore: add frontend-design skill`,
  `chore: add UI/UX Pro Max skills`), so either can be reverted alone.
* Bad, because vendored copies do not update themselves; refresh with `uipro update` and
  re-curl `frontend-design` when needed.
* Bad, because `.claude/settings.json` also enables the `ui-ux-pro-max` **plugin**
  (added earlier in this repo), so the same skills may appear twice (plugin-namespaced and
  project-level). **Owner to decide:** keep both, or remove the plugin entry from
  `.claude/settings.json`. Not changed here because the instructions were not to touch existing files.

### Confirmation

`ls .claude/skills` shows all eight skill folders; a new Claude Code session lists them.

## More Information

* `frontend-design` license: see `.claude/skills/frontend-design/LICENSE.txt`.
* UI/UX Pro Max is MIT-licensed; `ui-styling` ships its own `LICENSE.txt`.
