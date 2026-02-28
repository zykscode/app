export type DomainEventName =
  | "content.post.created"
  | "content.post.updated"
  | "content.post.deleted"
  | "identity.user.updated"
  | "admin.action.logged"

export type DomainEvent<TPayload = Record<string, unknown>> = {
  name: DomainEventName
  payload: TPayload
  occurredAt: Date
}

export type EventHandler<TPayload = Record<string, unknown>> = (
  event: DomainEvent<TPayload>
) => Promise<void> | void

const handlers = new Map<DomainEventName, EventHandler[]>()

export function registerEventHook(
  name: DomainEventName,
  handler: EventHandler
): void {
  const existing = handlers.get(name) ?? []
  handlers.set(name, [...existing, handler])
}

export async function emitDomainEvent<TPayload = Record<string, unknown>>(
  name: DomainEventName,
  payload: TPayload
): Promise<void> {
  const event: DomainEvent<TPayload> = {
    name,
    payload,
    occurredAt: new Date(),
  }

  const eventHandlers = handlers.get(name) ?? []

  await Promise.all(eventHandlers.map((handler) => Promise.resolve(handler(event))))
}

// Future integration points.
registerEventHook("content.post.created", async () => {
  // TODO: Trigger search indexing.
})
registerEventHook("content.post.updated", async () => {
  // TODO: Trigger search re-indexing.
})
registerEventHook("content.post.deleted", async () => {
  // TODO: Trigger search de-indexing.
})
registerEventHook("identity.user.updated", async () => {
  // TODO: Trigger notification fanout.
})
registerEventHook("admin.action.logged", async () => {
  // TODO: Push event to analytics pipeline.
})
