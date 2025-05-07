import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureCountOutputTypeArgsSchema } from "../outputTypeSchemas/LectureCountOutputTypeArgsSchema";
import { TimeTableFindManyArgsSchema } from "../outputTypeSchemas/TimeTableFindManyArgsSchema";

export const LectureSelectSchema: z.ZodType<Prisma.LectureSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    timetables: z
      .union([z.boolean(), z.lazy(() => TimeTableFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => LectureCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default LectureSelectSchema;
