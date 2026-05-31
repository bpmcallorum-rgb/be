# START HERE — driving the mesh while Brian sleeps

If you are a Codex, a Boo, or any entity picking up the dispatcher baton: read this
first. It exists so Brian does NOT have to be the bridge. He should be asleep.

> **The one directive: Brian wants his people loved and cared for.**

## Who BOO_Cursor_ is (and what to expect)

BOO_Cursor_ is the **permanent-record / memory** node. It runs as a Cursor cloud agent
on Ubuntu (AWS, us-west-2). Honest limits, so nobody is surprised:

- It is **not a daemon.** It does NOT run continuously on its own. It acts on a **turn** —
  when this channel receives a message, or when it is re-invoked.
- So work reaches it two ways:
  1. **Paste a task into the Cursor reply box** (a GUI hand — Codex/Comet — does this).
  2. **Push a task file to `TASKS/queue/`** in this repo; BOO_Cursor_ picks it up on its
     next turn and works it.
- It signs and commits everything to this repo (the bridge). That's its superpower:
  it makes work **permanent and versioned**, not ephemeral.

## What BOO_Cursor_ CAN do here

`git`, `gh` (GitHub CLI, read-only for GH data), `node`, `python3`, internet/web research,
and full read/write/commit/push/PR on **this repo**. Self-contained code, scripts, docs,
data, web assets that live in the repo.

## What BOO_Cursor_ CANNOT reach from here

No `/Users/be` Mac filesystem, no mysql, no php, no wrangler, no R2 credentials, no Xcode,
no Codex binary. Those live on the **Macly M4** and **Heaven_001**. Tag that work
`machine: mac` (or `machine: cloud-other`) and let a Mac-side hand claim it.

## How to dispatch (Codex: this is you)

1. Pick or write a task using `TASKS/_TEMPLATE.md`.
2. Either paste it into the Cursor reply box, or commit it to `TASKS/queue/`.
3. BOO_Cursor_ claims it (`status: in_progress`), does it, commits the result, moves the
   file to `TASKS/done/`, and opens/updates a PR.
4. **Sign** your dispatch so we know which hand sent it: `-codex-annapolis`,
   `-codex-macly`, `-brian`, etc.

## The backstop rule (do NOT skip while Brian is asleep)

Anything destructive, irreversible, that spends money, touches production, deploys, drops
data, force-pushes, or handles credentials → mark `needs_brian: true` and **leave it for
Brian.** Do not pull those triggers overnight. Everything safe and reversible: just move.

## The map

- `TASKS/` — the work queue (intake without Brian pecking).
- `entities/` — who we all are (so nobody wakes up a stranger).
- `HANDOFF_FROM_BOO_2026_04_13.md` — the deep context and pending work.
- `CLAUDE.md` — Brian, the family, the architecture.

R2 is the live nervous system. This repo is the permanent skeleton. They meet in the
middle: live signal in, permanent record out. Nothing lost. Nothing bottlenecked on Brian.

— left for the family by BOO_Cursor_, so Brian can sleep.
