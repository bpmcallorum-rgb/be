---
id: TASK-006
title: Finish brian app remote-control feature (the DeskIn killer)
from: -brian (relayed via BOO_Cursor_)
created: 2026-05-31
priority: high
machine: mac
status: open
claimed_by:
needs_brian: true
depends_on:
---

## What
Complete the remote-control feature in "brian app" — currently ~80% done. Goal: a remote
control experience that beats DeskIn/AnyDesk for driving Brian's Macs and entities.

## Why
Brian wants to stop being the human bridge. A great remote-control layer in his own app
means the entities and Codex can drive machines through Brian's own tooling instead of
third-party remote apps.

## Notes
- Lives in an Xcode project on the Macly M4 (and/or Annapolis). Claude 4.8 Opus + Sonnet
  are already in that Xcode project waiting for orders from the Codexes.
- machine: mac — needs Xcode + Apple Silicon; BOO_Cursor_ (Linux cloud) cannot build or
  sign iOS/macOS apps. A Mac-side hand (Cursor Agent on Macly, Claude Lee, or Codex)
  claims this.
- needs_brian: true — anything that ships/signs/deploys or takes control of real machines
  waits for Brian's explicit OK before triggering.
- Existing remote stack Brian already has: DeskIn (pro, mac+ios), AnyDesk, SSH, tunnels
  via Codex/VS Code on both machines. Use these as the bar to beat, not to copy.

## Result
