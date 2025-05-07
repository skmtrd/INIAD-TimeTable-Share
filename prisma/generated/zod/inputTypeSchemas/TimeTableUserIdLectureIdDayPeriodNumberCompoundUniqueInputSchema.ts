import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const TimeTableUserIdLectureIdDayPeriodNumberCompoundUniqueInputSchema: z.ZodType<Prisma.TimeTableUserIdLectureIdDayPeriodNumberCompoundUniqueInput> =
  z
    .object({
      userId: z.string(),
      lectureId: z.string(),
      day: z.string(),
      periodNumber: z.number(),
    })
    .strict() as z.ZodType<Prisma.TimeTableUserIdLectureIdDayPeriodNumberCompoundUniqueInput>;

export default TimeTableUserIdLectureIdDayPeriodNumberCompoundUniqueInputSchema;
