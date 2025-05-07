import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureArgsSchema } from "../outputTypeSchemas/LectureArgsSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";

export const TimeTableSelectSchema: z.ZodType<Prisma.TimeTableSelect> = z
  .object({
    userId: z.boolean().optional(),
    lectureId: z.boolean().optional(),
    day: z.boolean().optional(),
    periodNumber: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    lecture: z.union([z.boolean(), z.lazy(() => LectureArgsSchema)]).optional(),
  })
  .strict();

export default TimeTableSelectSchema;
