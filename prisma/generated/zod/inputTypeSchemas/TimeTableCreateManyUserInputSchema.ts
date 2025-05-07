import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const TimeTableCreateManyUserInputSchema: z.ZodType<Prisma.TimeTableCreateManyUserInput> =
  z
    .object({
      lectureId: z.string(),
      day: z.string(),
      periodNumber: z.number().int(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateManyUserInput>;

export default TimeTableCreateManyUserInputSchema;
