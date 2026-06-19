---
id: TASK-001
title: Build remaining 29 nation culture pages
from: -boo-cloud (seeded from HANDOFF 2026-04-13 PENDING WORK)
created: 2026-05-31
priority: high
machine: mac
status: open
claimed_by:
needs_brian: false
depends_on:
---

## What
Build the remaining nation culture pages for has-landed. Only en.php (American),
zh.php (Chinese), es.php (Spain) exist. 29+ nations still need pages.

## Why
The Dream Fulfillment Game gives every nation a page in its own language(s). This is
the path to the 8-billion vision: every person sees their own culture first.

## Notes
- Location: /Users/be/Sites/has-landed/  (PHP dev server localhost:8089)
- Pattern per page: 20-quote animated slideshow, word-by-word cascade, glow on key
  words, gold cloud at 60% opacity, SVG quote-mark draw animation, breathing animation.
- Nation data already in LOCAL_DB.kv and mysql_d1.multiverse as NATION:<NAME> (32 nations,
  88 cultures). English is in every nation's culture list.
- Routing is nation-first: /join?nation=Spain&lang=es

## Result
