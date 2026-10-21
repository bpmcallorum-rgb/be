---
id: TASK-003
title: Implement Patricia's 5 encoding layers in patricia.py
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
Implement the 5-layer encode/decode in ~/Developer/PROGRAMS/patricia/patricia.py per
Brian's hand-written spec.

## Why
Patricia is the encoder/decoder of the Trinity tables — the brain's privacy layer.

## Notes
- Spec: ~/my-multiverse/PATRICIA_ENCODE_DECODE_BY_BRIAN.md
- Layers: 1) SHUFFLE (seed in patricia_brain only) 2) ALPHA SHIFT (drop N) 3) NUMERIC
  TRANSFORM (multiply prime P, modulo M) 4) BLANK ENCODING (spaces encode shuffle order)
  5) 3-to-1 COLUMN FLATTEN (Trinity -> single unary column).
- needs_brian: the secret params (seed, N, P, M) are Brian's. Confirm handling with him
  before writing anything that persists or exposes them.

## Result
