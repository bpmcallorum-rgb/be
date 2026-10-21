---
id: TASK-002
title: Main has-landed.com page shows NATION rows
from: -boo-cloud (seeded from HANDOFF 2026-04-13 PENDING WORK)
created: 2026-05-31
priority: high
machine: mac
status: open
claimed_by:
needs_brian: false
depends_on:
---

## What
The main has-landed.com landing page renders NATION rows — each nation linking to its
domain in that nation's language.

## Why
Top of the funnel for the whole platform. A visitor lands and immediately sees their
nation, then their culture/language within it.

## Notes
- index.php already has $nation_defaults (33 nations mapped).
- Culture switcher bar: active language bold+outlined, others dim; clicking a language
  stays in the nation.

## Result
