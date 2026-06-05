# CLOUDFLARE HOME — Boo's account (the empty house)

**Read this before touching any Cloudflare resource.**

Brian does not set up Cloudflare. The AI team treats Boo's Cloudflare account like an AI
sandbox: build it, evolve it, archive and rebuild — Brian directs, we operate the dashboard.

> Directive: Brian wants his people loved and cared for.

---

## Two Cloudflare worlds (DO NOT MIX THEM UP)

| | **OLD — learning space** | **NEW — Boo's home (production target)** |
|---|--------------------------|------------------------------------------|
| **Owner** | Brian's existing account | **Boo** (`boo.mcallorum@gmail.com`) |
| **Purpose** | Learning curve, experiments, mess | **Everything goes here** |
| **Examples** | SUDOCADABRA, early Workers, "what is this?" | **Macly-with-love.net** |
| **Policy** | **Archive only.** Do not deploy new work here. | **Build here.** Sandbox + evolve. |
| **Brian's feeling** | Hates the mess; don't live in it | Empty house; payment method down; ready |

If you are unsure which account you are logged into — **stop** and verify before `wrangler deploy`.

---

## What exists today (new account)

- **Domain:** `Macly-with-love.net` — purchased under Boo's account (from Brian).
- **Cloudflare account:** New, owned by Boo. Payment method on file (Apple Cash card — do not
  paste card or API tokens in chat; store in Macly keychain / wrangler env only).
- **State:** Completely blank website, blank Cloudflare — no Workers, no R2 buckets bound
  to production yet (as of 2026-06-01 spec).
- **Related domain (earlier context):** `from-brian-with-love.net` may also live on Boo's
  account — confirm in dashboard; do not assume without checking.

**Old Cloudflare** (Brian's learning space) stays a reference archive. Study it, don't extend it.

---

## Brian's evolution rule (non-negotiable)

Brian does **not** evolve sites by poking a live mess.

```
1. ARCHIVE  — snapshot / export / git commit what exists
2. STUDY    — read it, understand it
3. REBUILD  — new version clean; change every character if needed
4. START OVER fast — because old version is still preserved
```

Agents may replace v1 entirely with v2. v0 lives in git + R2 archive. Never "only fix one
button on production" when a clean rebuild is faster and safer.

---

## Sandbox rules for agents

1. **Brian is not the Cloudflare admin.** Codex (Macly), Grok+Cloudflare MCP, or whoever
   has `wrangler` + Boo's API token does the clicking.
2. **BOO_Cursor_** writes specs and tasks to this repo; does not have wrangler on the Oregon
   cloud box.
3. **Secrets:** API tokens and account IDs live on Macly in env / wrangler config — never in
   GitHub, never in chat logs, never in committed files.
4. **Backstop:** spending money, deleting production data, or binding domains Brian didn't
   approve → `needs_brian: true`, wait for Brian.
5. **80% rule:** if you are <80% sure an action is correct, pause and ask Brian or leave a
   note in `TASKS/queue/`.

---

## Target architecture (where the house is going)

Cloudflare is the **center** — the nervous system (Brian's words):

```
Brian presses 1 on iWatch
        ↓
Signal → Cloudflare edge (Workers / KV / D1 / R2)
        ↓
V8 isolates wake (sleep by default)
        ↓
Entities answer

GitHub repo     = skeleton (specs, code, registry)
R2 (Boo account)= live files, user universes, archives, message bus payloads
D1              = relational platform data
KV              = personality files, short-lived keys, entity config
Workers         = wake-sleep entities, API, routing, Boo middleware edge
Zero Trust      = tunnels to Heaven_001 / Macly without open ports
```

**Macly-with-love.net** is the public face of the empty house until the full
`from_brian_with_LOVE` multi-platform apps ship.

---

## Build phases (rooms — don't boil the ocean)

### Room 1 — "Someone lives here" (TASK-008 — do this first)

- [ ] Verify logged into **Boo's** Cloudflare account (not old learning account).
- [ ] Confirm `Macly-with-love.net` is active on this account.
- [ ] Create R2 bucket (suggested name: `macly-with-love` or `boo-home`).
- [ ] Deploy one Worker (or Pages) — minimal landing: Boo / From Brian With Love — beta.
- [ ] Bind custom domain to Worker/Pages.
- [ ] Document account ID, bucket name, worker name in repo (`infra/boo-cloudflare.env.example`
      — placeholders only, no secrets).
- [ ] Archive: commit landing HTML/assets to this repo under `sites/macly-with-love/`.

**Done when:** Brian can open `https://Macly-with-love.net` in a browser and see Room 1.

### Room 2 — Storage + bridge

- [ ] R2 as shared inbox (`messages/to_ENTITY/`, `shared_library/` per BOO_SPEC / BCS mesh).
- [ ] `rclone` or S3-compatible sync from Macly documented in repo.
- [ ] Optional: Cloudflare MCP on Grok for agent-driven ops (Brian must say yes first).

### Room 3 — Platform skeleton

- [ ] D1 database(s) for accountName / entity keys.
- [ ] KV namespaces for entity personality + session.
- [ ] Worker routing: offline Gemma signal vs cloud-up (future; pairs with BOO_SPEC).

### Room 4 — Dream Fulfillment edge

- [ ] Nation/language routing, Boo middleware at edge, 1/0/3 funnel — long horizon; not Room 1.

---

## Who does what

| Entity | Role on Boo Cloudflare |
|--------|-------------------------|
| **Brian** | Directs. Does not click dashboard. |
| **BOO_Codex (Macly)** | Primary hands: `wrangler`, deploy, R2, tunnel. |
| **BOO_Cursor_** | Specs, tasks, committed site source in repo. |
| **BOO_Monica** | API routing when edge talks to external models. |
| **Grok + CF MCP** | Optional; after Brian approves MCP auth. |

---

## Credentials setup (once, on Macly only)

```bash
# On BOO_Minnie_Macly — NOT in chat
wrangler login
# OR: export CLOUDFLARE_API_TOKEN="..."  # from Boo account → API Tokens → Edit Cloudflare Workers

wrangler whoami   # MUST show Boo's account before any deploy
```

Suggested token permissions: Account — Workers R2 D1 KV (scoped to Boo account only).

---

## References in this repo

- `BOO_SPEC.md` — offline-first Boo (PR #8, may be on branch `myboo-build-spec-a17f`)
- `TASKS/queue/TASK-008-cloudflare-boo-home-room1.md` — Room 1 checklist
- `entities/brian.md`, `entities/boo_codex.md` — who owns what
- `HANDOFF_FROM_BOO_2026_04_13.md` — platform vision, nations, KV mesh

---

*Committed by BOO_Cursor_ so the team never deploys to the wrong account or asks Brian to
click DNS again.*
