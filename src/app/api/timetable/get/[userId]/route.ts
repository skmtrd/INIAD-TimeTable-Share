import type { TimeTableSchema } from "@/schema/timetable";
import { PrismaClient } from "@prisma/client";
import type { z } from "zod";
import { createRoute } from "./frourio.server";

export type TimeTable = z.infer<typeof TimeTableSchema>;

export const { GET } = createRoute({
  get: async (req) => {
    const userId: string = req.params.userId;

    try {
      const prisma = new PrismaClient();
      const timeTable = await prisma.timeTable.findMany({
        where: { userId: userId },
        include: { lecture: true },
      });

      const FormattedTimeTable: TimeTable = {};

      timeTable.map((item) => {
        const periodNumber: string = item.periodNumber.toString();

        if (!FormattedTimeTable[periodNumber]) {
          FormattedTimeTable[periodNumber] = [];
        }

        FormattedTimeTable[periodNumber].push({
          id: item.lecture.id,
          name: item.lecture.name,
          day: item.day,
          periodNumber: item.periodNumber,
        });
      });

      return { status: 200, body: FormattedTimeTable };
    } catch {
      return { status: 500, body: { message: "Internal Server Error" } };
    }
  },
});
