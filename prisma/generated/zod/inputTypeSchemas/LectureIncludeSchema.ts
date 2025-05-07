import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureCountOutputTypeArgsSchema } from "../outputTypeSchemas/LectureCountOutputTypeArgsSchema";
import { TimeTableFindManyArgsSchema } from "../outputTypeSchemas/TimeTableFindManyArgsSchema";

export const LectureIncludeSchema: z.ZodType<Prisma.LectureInclude> = z
  .object({
    timetables: z
      .union([z.boolean(), z.lazy(() => TimeTableFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => LectureCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default LectureIncludeSchema;
