import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureIncludeSchema } from "../inputTypeSchemas/LectureIncludeSchema";
import { LectureSelectSchema } from "../inputTypeSchemas/LectureSelectSchema";

export const LectureArgsSchema: z.ZodType<Prisma.LectureDefaultArgs> = z
  .object({
    select: z.lazy(() => LectureSelectSchema).optional(),
    include: z.lazy(() => LectureIncludeSchema).optional(),
  })
  .strict();

export default LectureArgsSchema;
