import { getServerSession } from "next-auth"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import {
  deletePostForAuthor,
  updatePostForAuthor,
} from "@/lib/services/content/post-service"
import { postPatchSchema } from "@/lib/validations/post"

const routeContextSchema = z.object({
  params: z.object({
    postId: z.string(),
  }),
})

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new Response(null, { status: 403 })
    }

    // Validate the route params.
    const { params } = routeContextSchema.parse(context)

    const deleted = await deletePostForAuthor({
      postId: params.postId,
      authorId: session.user.id,
    })

    if (!deleted) {
      return new Response(null, { status: 403 })
    }

    return new Response(null, { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new Response(null, { status: 403 })
    }

    // Validate route params.
    const { params } = routeContextSchema.parse(context)

    // Get the request body and validate it.
    const json = await req.json()
    const body = postPatchSchema.parse(json)

    const updated = await updatePostForAuthor({
      postId: params.postId,
      authorId: session.user.id,
      title: body.title,
      content: body.content,
    })

    if (!updated) {
      return new Response(null, { status: 403 })
    }

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
