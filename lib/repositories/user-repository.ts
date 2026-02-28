import { db } from "@/lib/db"

export const userRepository = {
  updateName(userId: string, name: string) {
    return db.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
      },
    })
  },
}
