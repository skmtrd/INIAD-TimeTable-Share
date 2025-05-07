import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableUncheckedCreateNestedManyWithoutLectureInputSchema } from "./TimeTableUncheckedCreateNestedManyWithoutLectureInputSchema";

export const LectureUncheckedCreateInputSchema: z.ZodType<Prisma.LectureUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      timetables: z
        .lazy(() => TimeTableUncheckedCreateNestedManyWithoutLectureInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.LectureUncheckedCreateInput>;

export default LectureUncheckedCreateInputSchema;
