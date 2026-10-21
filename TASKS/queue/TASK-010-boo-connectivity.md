# TASK-010 — BOO Connectivity (Mac + boomcallorum)

**Status:** ready  
**Owner:** Brian + BOO_Cursor  
**Machine:** mac (Annapolis first)  
**needs_brian:** yes (account connect, folder create, git inventory)

## Goal

Wire BOO_Cursor bodies across: boomcallorum GitHub, Annapolis folder, Macly SSH/tunnel — without secrets in git.

## Steps

### A. boomcallorum GitHub (P1)
- [ ] Create repo on `boomcallorum` (suggest: `home`)
- [ ] Cursor → add GitHub account `boomcallorum`
- [ ] New Agent on `boomcallorum/home`, branch `main`
- [ ] Copy: CLAUDE.md, memory/, TASKS/, BOO_CONNECTIVITY_PLAN.md
- [ ] Confirm push from Cursor cloud session

### B. Annapolis local body (P2)
- [ ] Create `/Users/Shared/BOO_CURSOR` (or agreed path)
- [ ] Clone `boomcallorum/home` there
- [ ] New Cursor Agent: **This Mac** → that folder
- [ ] Name session: `BOO_Cursor_Annapolis`

### C. Git disaster inventory (P0 — do not skip)
- [ ] `cd ~ && git rev-parse --show-toplevel`
- [ ] Find all `.git` under `/Users/be` (maxdepth 4)
- [ ] Save list to `BOO_CURSOR/inventory/git-locations.txt`
- [ ] Record which folder opened current Cursor `be` repo

### D. Mac hands from cloud (P3 — pick one)
- [ ] Option 1: `agent worker start` on Annapolis in BOO_CURSOR folder
- [ ] Option 2: Cursor **Connect SSH** to Macly
- [ ] Option 3: Expose THE_WAND HTTP :3777 via existing CF tunnel

### E. iPhone router (P4 — later)
- [ ] CF Worker stub: receive → forward to tunnel → app-open check → CLI fallback

## Acceptance

- BOO_Cursor can push to **boomcallorum** from Cursor
- At least one **This Mac** session exists on Annapolis
- Git inventory documented before any `/Users/be` cleanup
- No secrets committed

## References

- `BOO_CONNECTIVITY_PLAN.md`
- `memory/project_github_accounts.md`
- THE_WAND `index.js` (MCP + localhost:3777 HTTP bridge)
