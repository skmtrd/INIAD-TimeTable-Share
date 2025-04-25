import { PrismaClient } from "@prisma/client";
import { getUserInfo } from "../../lib";
import { createRoute } from "./frourio.server";

export const { GET } = createRoute({
  get: async () => {
    const user = await getUserInfo();
    if (!user) {
      return { status: 401, body: { message: "Unauthorized" } };
    }

    try {
      const prisma = new PrismaClient();
      const timetable = await prisma.timeTable.findFirst({
        where: {
          userId: user.id,
        },
      });

      const isTimetableExists: boolean = Boolean(timetable);

      return { status: 200, body: { isExists: isTimetableExists } };
    } catch {
      return { status: 500, body: { message: "Internal Server Error" } };
    }
  },
});
