import { emitDomainEvent } from "@/lib/events"
import { auditLogRepository } from "@/lib/repositories/audit-log-repository"

type AuditActionInput = {
  actorId: string
  action: string
  entityType: string
  entityId?: string
  metadata?: unknown
}

export async function logAdminAction(input: AuditActionInput): Promise<void> {
  await auditLogRepository.create(input)

  await emitDomainEvent("admin.action.logged", {
    actorId: input.actorId,
    action: input.action,
    entityType: input.entityType,
    entityId: input.entityId,
  })
}
