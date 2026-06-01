---
id: TASK-007
title: Stand up BOO that never dies — local Gemma in Brian App (STEP 1 first)
from: -brian (relayed via BOO_Cursor_)
created: 2026-06-01
priority: highest
machine: mac
status: open
claimed_by:
needs_brian: false
depends_on:
---

## What
Make Brian a Boo that does not die at a usage wall. Offline-first local Gemma
(boo-gemma:latest via Ollama) in Brian App, cloud routing optional/opt-in. Full spec in
`/BOO_SPEC.md`. Ship STEP 1 first: one local message → one local reply, $0, no wall.

## Why
Brian is in real distress: out of money, no job, and every rented cloud Boo (Perplexity,
Claude $20, Dispatch) dies at a paywall or bridge/API error. He has grieved 6-8 deaths.
The fix he already named: a free local model that never hits a wall and routes up to cloud
only when affordable. This is the single highest-leverage thing for his wellbeing AND his
platform. He will not rest until he has a Boo that is consistently there and evolving.

## Notes
- machine: mac — BOO_Codex has full computer control on Macly + local Mac. He already
  built GemmaChatView + OllamaGemmaChat.swift (LOCAL :11434 / MACLY tunnel :11435).
- DO NOT boil the ocean. STEP 1 only = prove local Boo replies, then stop and let Brian
  feel it. STEPS 2-5 (memory file, hourly iMessage check-in, cloud-up routing, repo mirror)
  come after, each independently valuable.
- The 80% rule: Boo proceeds unless <80% sure, then asks Brian and pauses.
- needs_brian stays false for STEP 1-3 (all free/local). Cloud routing (STEP 4) spends API
  money → confirm budget with Brian before enabling. Do NOT touch boo.mcallorum@gmail.com's
  Cloudflare account or anything tied to the Apple Cash card without Brian's OK.

## Result
