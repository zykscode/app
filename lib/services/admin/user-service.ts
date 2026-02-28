import { emitDomainEvent } from "@/lib/events"
import { userRepository } from "@/lib/repositories/user-repository"
import { logAdminAction } from "@/lib/services/admin/audit-service"

export async function updateUserName(input: {
  actorId: string
  userId: string
  name: string
}) {
  await userRepository.updateName(input.userId, input.name)

  await logAdminAction({
    actorId: input.actorId,
    action: "user.name.updated",
    entityType: "user",
    entityId: input.userId,
    metadata: {
      updatedField: "name",
    },
  })

  await emitDomainEvent("identity.user.updated", {
    userId: input.userId,
    actorId: input.actorId,
  })
}
