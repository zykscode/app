import { db } from "@/lib/db"

type CreateAuditLogInput = {
  actorId: string
  action: string
  entityType: string
  entityId?: string
  metadata?: unknown
}

export const auditLogRepository = {
  create(input: CreateAuditLogInput) {
    return db.auditLog.create({
      data: {
        actorId: input.actorId,
        action: input.action,
        entityType: input.entityType,
        entityId: input.entityId,
        metadata: input.metadata,
      },
    })
  },
}
