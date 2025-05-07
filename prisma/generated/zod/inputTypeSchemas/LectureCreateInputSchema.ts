import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateNestedManyWithoutLectureInputSchema } from "./TimeTableCreateNestedManyWithoutLectureInputSchema";

export const LectureCreateInputSchema: z.ZodType<Prisma.LectureCreateInput> = z
  .object({
    id: z.string().cuid().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    timetables: z
      .lazy(() => TimeTableCreateNestedManyWithoutLectureInputSchema)
      .optional(),
  })
  .strict() as z.ZodType<Prisma.LectureCreateInput>;

export default LectureCreateInputSchema;
