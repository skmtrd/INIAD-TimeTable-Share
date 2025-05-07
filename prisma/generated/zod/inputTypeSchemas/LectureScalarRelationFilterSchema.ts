import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { LectureWhereInputSchema } from "./LectureWhereInputSchema";

export const LectureScalarRelationFilterSchema: z.ZodType<Prisma.LectureScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => LectureWhereInputSchema).optional(),
      isNot: z.lazy(() => LectureWhereInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.LectureScalarRelationFilter>;

export default LectureScalarRelationFilterSchema;
