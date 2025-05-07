import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const TimeTableUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TimeTableUncheckedCreateWithoutUserInput> =
  z
    .object({
      lectureId: z.string(),
      day: z.string(),
      periodNumber: z.number().int(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableUncheckedCreateWithoutUserInput>;

export default TimeTableUncheckedCreateWithoutUserInputSchema;
