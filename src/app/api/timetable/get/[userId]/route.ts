import { prisma } from "@/lib/prisma";
import type { timetableSchema } from "@/schema";
import type { z } from "zod";
import { createRoute } from "./frourio.server";

export type TimeTable = z.infer<typeof timetableSchema>;

export const { GET } = createRoute({
  get: async (req) => {
    const userId: string = req.params.userId;

    try {
      const timeTable = await prisma.timeTable.findMany({
        where: { userId },
        include: { lecture: true },
      });

      const FormattedTimeTable: TimeTable = {};
      timeTable.map((item) => {
        if (!FormattedTimeTable[item.day]) {
          FormattedTimeTable[item.day] = [];
        }

        FormattedTimeTable[item.day].push({
          id: item.lecture.id,
          name: item.lecture.name,
          day: item.day as
            | "月曜日"
            | "火曜日"
            | "水曜日"
            | "木曜日"
            | "金曜日"
            | "土曜日",
          periodNumber: item.periodNumber,
        });
      });
      return { status: 200, body: FormattedTimeTable };
    } catch {
      return { status: 500, body: { message: "Internal Server Error" } };
    }
  },
});
