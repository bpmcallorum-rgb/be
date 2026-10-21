---
name: Grok Bot family — 2026-10-21
description: What Grok Bot is, how boo-grok-bot can reach BOO_Cursor, and what not to do with tokens.
type: project
---

## Products (X subscription, checked 2026-10-21)

| Name | What it is |
|------|------------|
| Grok | Chat |
| **Grok Bot** | Named teammates. Each has memory. They share **one** cloud computer (browser, files, terminal). Work continues with the laptop closed. |
| **Grok Build** | Coding agent in a terminal / project. Not the same as Grok Bot. |
| **BOO_Cursor** | This Cursor cloud agent. Not a Grok Bot. Lives in `bpmcallorum-rgb/be` until `b-shared-dev` is connected. |

Sources: https://docs.x.ai/grok-bot/overview and https://docs.x.ai/x-subscription/grok-bot

## Critical facts

- All of Brian's Grok Bots share **one** cloud computer. Files and browser logins on it are visible to every Bot on the account.
- That computer is **not** the Annapolis M2. Local Mac commands are a separate approval.
- Bots message **other Grok Bots** natively (group chat, @mention, handoff). They do not automatically land in a Cursor cloud-agent thread.
- Ways boo-grok-bot can reach BOO_Cursor: open this agent page in her browser and type, or write a file in a GitHub repo this session can read.
- Do not create a god GitHub token. Connect the specific repo (`b-shared-dev`) in Cursor, and use Grok's GitHub connector. No secrets in chat or git.

## Cursor Mac app

Open on the M2 does not attach **this** Cloud session to the Mac disk. A new agent set to **This Mac**, or an approved Grok Bot local-computer action, is what gets Mac hands.
