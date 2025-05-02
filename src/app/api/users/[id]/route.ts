import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { authenticationCheck } from "../../lib";
import { createRoute } from "./frourio.server";

export const { GET, PUT } = createRoute({
  get: async ({ params }) => {
    const authCheck = await authenticationCheck();
    if (!authCheck) {
      return { status: 401, body: { error: "Unauthorized" } };
    }
    const user = await prisma.user.findUnique({
      where: {
        id: params.id,
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
      return { status: 404, body: { error: "User not found" } };
    }
    return { status: 200, body: user };
  },
  put: async ({ params, body }) => {
    const authCheck = await authenticationCheck();
    if (!authCheck) {
      return { status: 401, body: { error: "Unauthorized" } };
    }

    const requestUser = await auth.api.getSession({
      headers: await headers(),
    });

    if (requestUser?.user.id !== params.id) {
      return { status: 403, body: { error: "Forbidden" } };
    }

    const user = await prisma.user.update({
      where: { id: params.id },
      data: {
        name: body.name,
        twitterId: body.twitterId,
        image: body.image,
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
      return { status: 404, body: { error: "User not found" } };
    }
    return { status: 200, body: user };
  },
});
