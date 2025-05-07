import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureArgsSchema } from "../outputTypeSchemas/LectureArgsSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";

export const TimeTableIncludeSchema: z.ZodType<Prisma.TimeTableInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    lecture: z.union([z.boolean(), z.lazy(() => LectureArgsSchema)]).optional(),
  })
  .strict();

export default TimeTableIncludeSchema;
