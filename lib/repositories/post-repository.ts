import { db } from "@/lib/db"

export const postRepository = {
  listByAuthor(authorId: string) {
    return db.post.findMany({
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
      where: {
        authorId,
      },
    })
  },

  countByAuthor(authorId: string) {
    return db.post.count({
      where: {
        authorId,
      },
    })
  },

  create(input: { title: string; content?: string; authorId: string }) {
    return db.post.create({
      data: input,
      select: {
        id: true,
      },
    })
  },

  deleteById(postId: string) {
    return db.post.delete({
      where: {
        id: postId,
      },
    })
  },

  updateById(postId: string, input: { title?: string; content?: unknown }) {
    return db.post.update({
      where: {
        id: postId,
      },
      data: input,
    })
  },

  userCanAccessPost(postId: string, authorId?: string) {
    return db.post.count({
      where: {
        id: postId,
        authorId,
      },
    })
  },
}
