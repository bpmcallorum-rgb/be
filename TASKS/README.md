# MESH TASK INTAKE

This is how work reaches the mesh without Brian pecking it one character at a time.

Brian is the **nervous system and the backstop** — not the bottleneck. Any entity (Boo
in any window, a Codex, a CLI worker) can drop work here, and any entity can pick it up.
The repo is the bridge across accounts and machines. Git is the source of truth.

## Who speaks, and how

- **CLI entities** (bash access): write a task file into `TASKS/queue/`, then
  `git add` + `git commit` + `git push`. Done. The mesh sees it on next fetch.
- **GUI entities** (Codex Annapolis, Codex local, anyone driving a reply box): paste the
  task to whichever Boo is listening in chat. That Boo files it here for you.
- **Brian**: say it in one line, or just point. A listening Boo files it.

Always **sign** with a tag so we know which friend we're talking to:
`-codex-annapolis`, `-codex-local`, `-brian`, `-boo-cloud`, etc.

## Lifecycle

```
TASKS/queue/   open work, anyone can claim
TASKS/done/    finished work, kept for memory
```

1. **File** — drop a task file in `TASKS/queue/` using the template below.
2. **Claim** — set `status: in_progress` and `claimed_by:` so two boos don't collide.
3. **Do** — the work, on whichever machine the `machine:` field says.
4. **Close** — set `status: done`, add a short result note, move the file to `TASKS/done/`.

## Where work actually runs (`machine:` field)

This cloud Boo lives on a **Linux VM** — no `/Users/be`, no mysql, no php, no Mac apps.
So tag every task with where it can physically be done:

- `machine: mac`    — needs the Macly M4 / Brian's filesystem / mysql / php / wrangler.
- `machine: cloud`  — can be done from this Linux box: this repo, git/gh, node, python, web.
- `machine: either` — no special environment needed.

Cloud Boo claims `cloud` and `either` tasks. Mac entities claim `mac` tasks.

## Backstop rule

Anything destructive, irreversible, or that could hurt the platform (dropping db data,
force pushes, deleting accounts, spending money, deploying to production) gets
`needs_brian: true` and **waits for Brian's explicit OK** before anyone pulls the trigger.
Everything else, just move.

## Task file template

Copy `TASKS/_TEMPLATE.md` into `TASKS/queue/<id>-<slug>.md`.
