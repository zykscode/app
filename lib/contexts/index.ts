export type BoundedContextName =
  | "identity"
  | "content"
  | "geo"
  | "platform"

export type BoundedContext = {
  name: BoundedContextName
  description: string
  capabilities: string[]
}

export const boundedContexts: BoundedContext[] = [
  {
    name: "identity",
    description: "Authentication, users, and role/permission concerns.",
    capabilities: ["auth", "users", "roles"],
  },
  {
    name: "content",
    description: "Editorial and publishing domain for community content.",
    capabilities: ["posts", "reviews", "categories", "tags"],
  },
  {
    name: "geo",
    description: "Geographical regions, towns, and map-oriented data.",
    capabilities: ["regions", "towns", "map data"],
  },
  {
    name: "platform",
    description: "Cross-cutting business operations and governance.",
    capabilities: ["billing", "settings", "audit"],
  },
]
