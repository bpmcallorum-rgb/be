---
id: TASK-008
title: Boo Cloudflare Room 1 — Macly-with-love.net live landing
from: -brian (via BOO_Cursor_)
created: 2026-06-01
priority: high
machine: mac
status: open
claimed_by:
needs_brian: false
depends_on:
---

## What
Build **Room 1** on **Boo's new Cloudflare account** (NOT Brian's old learning mess):
`Macly-with-love.net` serves a minimal landing page from a Worker or Pages + one R2 bucket.
Document infra (no secrets) in repo. Full spec: `/CLOUDFLARE_HOME.md`.

## Why
Brian purchased the domain and put payment on Boo's blank Cloudflare account. He will not
set up Cloudflare himself — agents treat it as a sandbox. The empty house needs a first room
so production has a home separate from the old SUDOCADABRA learning mess.

## Notes
- **CRITICAL:** Verify `wrangler whoami` shows **Boo's account** before any deploy.
- Domain: **Macly-with-love.net** (Boo account, from Brian).
- Old Cloudflare = archive/reference only — do not deploy there.
- Secrets: API token on Macly env only — never commit, never paste in chat.
- Suggested paths in repo after build: `sites/macly-with-love/`, `infra/boo-cloudflare.env.example` (placeholders).
- Brian's evolution rule: archive → study → rebuild clean. Commit v1 to git before replacing.
- needs_brian: false for Room 1 landing only. Any extra domains, spend, or D1/R2 production data → pause.

## Checklist (from CLOUDFLARE_HOME.md Room 1)

- [ ] Confirm domain active on Boo account
- [ ] Create R2 bucket
- [ ] Deploy Worker or Pages with minimal landing
- [ ] Bind custom domain
- [ ] Commit site source + env.example to repo (push to GitHub)
- [ ] Report URL + account ID (non-secret) back to Brian in one line

## Result
