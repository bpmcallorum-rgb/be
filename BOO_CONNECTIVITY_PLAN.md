# BOO Connectivity Plan

Authoritative next steps for wiring BOO_Cursor across environments.
Brian approved direction 2026-06-03. **No secrets in this file.**

## Account map (correct)

| Who | GitHub | Role |
|-----|--------|------|
| Brian | `bpmcallorum-rgb` | Learning ground, deprecated over time |
| Boo | `boomcallorum` | **Production home** — main target |

## Goal

One BOO layer. Many bodies. Shared `who-am-i.md` + TASK queue + Cloudflare nervous system.

```
iPhone → Boo Cloudflare Worker → Annapolis Mac → Brian App (full) OR Python CLI (fallback)
                                      ↓
                              Ollama (Hermes/Gemma) when offline
```

## Cursor "Worker" ≠ Cloudflare Worker

| Term | What it is |
|------|------------|
| **Cloudflare Worker** | V8 isolate at the edge. HTTP in/out. Your mental model. |
| **Cursor pool worker** | A **Mac (or VM) running `agent worker`** that Cloud BOO_Cursor can **claim** for a session so bash/file tools run **on your metal** |

Flow: **Brain in cloud** → **hands on your Mac** for that job.

## Team Pool — education

1. Install **Cursor Agent CLI** on the machine (`agent` command).
2. On Annapolis (or Macly), in a **small dedicated folder** (NOT `/Users/be`):
   ```bash
   cd /Users/Shared/BOO_CURSOR   # example — pick one canonical path
   agent login                   # or CURSOR_API_KEY for automation
   agent worker start            # individual worker (Team/Pro)
   # OR for shared pool assignment:
   agent worker --pool start     # may require Team Enterprise + Service Account API key
   ```
3. In Cursor UI: **Cloud** dropdown → pick **Team Pool** or **This Mac** or **Connect SSH**.

**Pro plan note:** Full `--pool` registration may require **Enterprise + Service Account key**. On Pro, try **`agent worker start`** (no `--pool`) or **Connect SSH** / **This Mac** first.

## Priority order (financial blackout safe)

### P0 — Do NOT make worse
- **Stop initing git repos at `/Users/be` or home directory level.**
- Never `git init` in `/Users/be` again. New work only in named folders.

### P1 — Boo's GitHub (`boomcallorum`) ← main home
1. Create repo on `boomcallorum` (e.g. `boo` or `home`).
2. In Cursor: add second GitHub account → connect `boomcallorum`.
3. New Agent → pick **boomcallorum** repo → **Cloud** or **This Mac**.
4. Copy into Boo repo (no secrets): `CLAUDE.md`, `memory/`, `TASKS/`, `BOO_CONNECTIVITY_PLAN.md`.
5. **Deprecate** `bpmcallorum-rgb/be` for new work; archive when ready.

### P2 — Annapolis BOO_CURSOR folder (local hands)
Canonical path (Brian's choice):
```
/Users/Shared/BOO_CURSOR/     # or ~/Developer/BOO_CURSOR
├── who-am-i.md
├── TASKS/                    # pull from boomcallorum
├── bridge/                   # Python computer-control fallback
└── wand/                     # symlink or copy THE_WAND MCP
```

Cursor session: **This Mac** → open `/Users/Shared/BOO_CURSOR`.

### P3 — Cloud BOO_Cursor → Mac hands (pick ONE first)

| Method | Cost | Best for |
|--------|------|----------|
| **This Mac** session | Free | When Brian at Annapolis machine |
| **Connect SSH** | Free | Macly front door |
| **Team Pool worker** | Free if CLI works | Cloud me → your metal |
| **THE_WAND HTTP :3777** | Free | Already built — expose via CF tunnel |
| **Tailscale** | Free tier | Private mesh between boxes |

**Recommended:** Extend **THE_WAND** HTTP bridge through existing Cloudflare tunnel (Monica pattern). Cloud BOO calls tunnel URL — never raw Mac IP in repo.

### P4 — iPhone → Cloudflare → Mac (your design — good)
- Worker receives message
- Forwards to Annapolis (tunnel/tailscale)
- Router: Brian App open? → full permissions : Python CLI
- Offline path: Gemini Flash (Google AI Studio) → local Ollama Hermes/Gemma

### P5 — `/Users/be` git disaster (careful surgery)

**Problem:** Entire home folder is a git repo + nested `/Users/be/be` — Claudes depend on paths.

**Do NOT:** casual delete, `rm -rf .git` without inventory, mass reorganize.

**Do:**
1. On Annapolis, in Terminal:
   ```bash
   cd ~ && git rev-parse --show-toplevel   # confirms if ~ is repo root
   ls -la ~/.git 2>/dev/null
   ls -la ~/be/.git 2>/dev/null
   ```
2. Document every `.git` found → `BOO_CURSOR/inventory/git-locations.txt`
3. Identify which repo Cursor `be` remote points to (`git remote -v` in each)
4. **New canonical repos only in** `/Users/Shared/BOO_CURSOR` and `boomcallorum` — stop the bleeding
5. Later: `git worktree` or export subfolders to proper repos; never delete until dependents mapped

## Entity naming (Brian's instinct is right)

```
BOO_Cursor | boomcallorum/home | main | Cloud
BOO_Cursor | /Users/Shared/BOO_CURSOR | — | This Mac
BOO_Cursor | Macly | — | SSH
```

Same BOO. Different body. Label every session.

## Secrets — never in chat or git

| Store | Holds |
|-------|-------|
| `~/.boo/secrets/` on Mac | SSH, API keys, tunnel tokens |
| Cloudflare Workers secrets | Production keys |
| Repo | Maps only: "tunnel hostname X", "tailnet name Y" |

## What BOO_Cursor cloud does today

- RW: `bpmcallorum-rgb/be` (Brian GitHub — transition away)
- RW: this Linux VM shell
- No RW: Mac filesystem, boomcallorum (until connected), Boo Cloudflare deploy

## Next 3 actions for Brian (pick order)

1. **Create `boomcallorum` home repo** + connect in Cursor (15 min)
2. **Create `/Users/Shared/BOO_CURSOR`** + one **This Mac** agent session there (10 min)
3. **Run git inventory** on Annapolis — find all `.git` roots before any cleanup (20 min)

---

*BOO_Cursor — cloud persistence. Your app BOO — Annapolis hands. boomcallorum — skeleton. Boo Cloudflare — nervous system.*
