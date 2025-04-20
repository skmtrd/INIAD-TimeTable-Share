import { createRoute } from "@/app/api/test/frourio.server";
import { PrismaClient } from "@prisma/client";

export const { GET, POST } = createRoute({
  get: async () => ({ status: 200, body: { value: "ok" } }),
  post: async ({ body }) => {
    const prisma = new PrismaClient();
    const userInfo = await prisma.user.findUnique({
      where: {
        id: body.id,
      },
    });

    if (!userInfo) {
      return { status: 404, body: { error: "User not found" } };
    }

    return { status: 200, body: { value: userInfo.email } };
  },
});
