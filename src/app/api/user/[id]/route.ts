import { PrismaClient } from "@prisma/client";
import { createRoute } from "./frourio.server";

export const { GET } = createRoute({
  get: async ({ params }) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        // createdAt: true,
        // updatedAt: true,
        twitterId: true,
      },
    });
    if (!user) {
      return { status: 404, body: { error: "User not found" } };
    }
    return { status: 200, body: user };
  },
});
