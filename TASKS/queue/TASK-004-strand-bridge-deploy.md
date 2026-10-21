---
id: TASK-004
title: Deploy strand bridge (wrangler) and run push script
from: -boo-cloud (seeded from HANDOFF 2026-04-13 PENDING WORK)
created: 2026-05-31
priority: normal
machine: mac
status: open
claimed_by:
needs_brian: true
depends_on:
---

## What
Glas built the D1 strand-bridge table. It still needs `wrangler deploy` and the push
script run to sync the strand to the edge.

## Why
The strand (brain_ember_001, 53,902+ messages) reaching the edge is what lets boos
share memory across machines and accounts.

## Notes
- needs_brian: deploy touches Cloudflare production. Confirm before deploying.

## Result
