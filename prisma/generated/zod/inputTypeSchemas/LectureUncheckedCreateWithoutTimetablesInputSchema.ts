import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const LectureUncheckedCreateWithoutTimetablesInputSchema: z.ZodType<Prisma.LectureUncheckedCreateWithoutTimetablesInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict() as z.ZodType<Prisma.LectureUncheckedCreateWithoutTimetablesInput>;

export default LectureUncheckedCreateWithoutTimetablesInputSchema;
