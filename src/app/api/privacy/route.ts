import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { createRoute } from "./frourio.server";

export const { PUT } = createRoute({
  put: async ({ body }) => {
    const requestUser = await auth.api.getSession({
      headers: await headers(),
    });
    if (!requestUser) {
      return { status: 401, body: { error: "Unauthorized" } };
    }
    const user = await prisma.user.update({
      where: { id: requestUser.user.id },
      data: { privacyProtection: body.privacyProtection },
    });
    if (!user) {
      return { status: 404, body: { error: "User not found" } };
    }
    return { status: 200, body: { message: "Privacy protection updated" } };
  },
});
