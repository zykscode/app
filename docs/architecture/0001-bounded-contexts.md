# ADR-0001: Domain bounded contexts

## Status
Accepted

## Context
The codebase has started to combine authentication, publishing, and operational concerns directly in route handlers. We need explicit domain boundaries to reduce coupling and support future scaling.

## Decision
We define four bounded contexts:

- **identity**: auth, users, roles.
- **content**: posts, reviews, categories, tags.
- **geo**: regions, towns, map data.
- **platform**: billing, settings, audit.

Context definitions are captured in `lib/contexts/index.ts` and used as a shared architecture vocabulary.

## Consequences
- Better decomposition of code ownership and changes.
- Reduced accidental coupling between route handlers and persistence details.
- Clear path to splitting services in the future if needed.
