# ADR-0002: Service and repository layering

## Status
Accepted

## Context
Route handlers currently perform validation, authorization, subscription checks, and direct Prisma calls. Repeated query logic appears across handlers.

## Decision
Introduce thin route handlers backed by a service layer under `lib/services` and repositories under `lib/repositories`.

- `lib/services/content/*`: content workflows (posts today, room for reviews/categories/tags).
- `lib/services/geo/*`: geo workflows (regions/towns/map data).
- `lib/services/admin/*`: admin/platform workflows.
- `lib/repositories/*`: centralized query/data access abstractions where Prisma usage repeats.

## Consequences
- Less repeated persistence logic.
- Clearer places to insert cross-cutting behaviors like audit logging and events.
- Improved testability for workflows independent from Next.js route modules.
