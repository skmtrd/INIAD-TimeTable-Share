import type { Prisma } from "@prisma/client";
import { z } from "zod";

export const LectureCountOutputTypeSelectSchema: z.ZodType<Prisma.LectureCountOutputTypeSelect> =
  z
    .object({
      timetables: z.boolean().optional(),
    })
    .strict();

export default LectureCountOutputTypeSelectSchema;
