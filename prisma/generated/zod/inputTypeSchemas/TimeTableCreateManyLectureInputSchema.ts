import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const TimeTableCreateManyLectureInputSchema: z.ZodType<Prisma.TimeTableCreateManyLectureInput> =
  z
    .object({
      userId: z.string(),
      day: z.string(),
      periodNumber: z.number().int(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateManyLectureInput>;

export default TimeTableCreateManyLectureInputSchema;
