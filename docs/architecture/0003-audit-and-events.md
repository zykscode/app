# ADR-0003: Audit trail and domain event hooks

## Status
Accepted

## Context
Admin/platform actions require an immutable audit trail. We also need non-invasive extension points for search indexing, notifications, and analytics.

## Decision
1. Add `AuditLog` persistence model (`audit_logs` table) with actor, action, entity metadata, and timestamp.
2. Add admin audit service to record high-value mutations.
3. Add lightweight domain event hooks in `lib/events` and emit events from services.

## Consequences
- Critical user/admin mutations can be traced.
- Integrations can be added by attaching handlers without changing route handlers.
- Event flow remains in-process for now; can evolve to async bus later.
