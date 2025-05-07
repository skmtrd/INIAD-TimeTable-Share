import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const TimeTableCreateManyInputSchema: z.ZodType<Prisma.TimeTableCreateManyInput> =
  z
    .object({
      userId: z.string(),
      lectureId: z.string(),
      day: z.string(),
      periodNumber: z.number().int(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateManyInput>;

export default TimeTableCreateManyInputSchema;
