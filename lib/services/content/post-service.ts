import { emitDomainEvent } from "@/lib/events"
import { RequiresProPlanError } from "@/lib/exceptions"
import { postRepository } from "@/lib/repositories/post-repository"
import { getUserSubscriptionPlan } from "@/lib/subscription"

export async function listPostsForAuthor(authorId: string) {
  return postRepository.listByAuthor(authorId)
}

export async function createPostForAuthor(input: {
  authorId: string
  title: string
  content?: string
}) {
  const subscriptionPlan = await getUserSubscriptionPlan(input.authorId)

  if (!subscriptionPlan?.isPro) {
    const count = await postRepository.countByAuthor(input.authorId)

    if (count >= 3) {
      throw new RequiresProPlanError()
    }
  }

  const post = await postRepository.create(input)

  await emitDomainEvent("content.post.created", {
    postId: post.id,
    authorId: input.authorId,
  })

  return post
}

export async function updatePostForAuthor(input: {
  postId: string
  authorId: string
  title?: string
  content?: unknown
}) {
  const hasAccess = await verifyAuthorCanAccessPost(input.postId, input.authorId)

  if (!hasAccess) {
    return false
  }

  await postRepository.updateById(input.postId, {
    title: input.title,
    content: input.content,
  })

  await emitDomainEvent("content.post.updated", {
    postId: input.postId,
    authorId: input.authorId,
  })

  return true
}

export async function deletePostForAuthor(input: {
  postId: string
  authorId: string
}) {
  const hasAccess = await verifyAuthorCanAccessPost(input.postId, input.authorId)

  if (!hasAccess) {
    return false
  }

  await postRepository.deleteById(input.postId)

  await emitDomainEvent("content.post.deleted", {
    postId: input.postId,
    authorId: input.authorId,
  })

  return true
}

export async function verifyAuthorCanAccessPost(
  postId: string,
  authorId?: string
): Promise<boolean> {
  const count = await postRepository.userCanAccessPost(postId, authorId)

  return count > 0
}
