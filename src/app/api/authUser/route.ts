import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { createRoute } from "./frourio.server";

export const { GET } = createRoute({
  get: async () => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return { status: 401, body: { error: "Unauthorized" } };
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        twitterId: true,
        privacyProtection: true,
      },
    });

    if (!user) {
      return { status: 401, body: { error: "Unauthorized" } };
    }

    return { status: 200, body: user };
  },
});
