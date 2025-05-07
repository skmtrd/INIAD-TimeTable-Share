import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const TimeTableUncheckedCreateInputSchema: z.ZodType<Prisma.TimeTableUncheckedCreateInput> =
  z
    .object({
      userId: z.string(),
      lectureId: z.string(),
      day: z.string(),
      periodNumber: z.number().int(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableUncheckedCreateInput>;

export default TimeTableUncheckedCreateInputSchema;
