import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const TimeTableUncheckedCreateWithoutLectureInputSchema: z.ZodType<Prisma.TimeTableUncheckedCreateWithoutLectureInput> =
  z
    .object({
      userId: z.string(),
      day: z.string(),
      periodNumber: z.number().int(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableUncheckedCreateWithoutLectureInput>;

export default TimeTableUncheckedCreateWithoutLectureInputSchema;
