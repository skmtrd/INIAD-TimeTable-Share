import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureWhereInputSchema } from "../inputTypeSchemas/LectureWhereInputSchema";

export const LectureDeleteManyArgsSchema: z.ZodType<Prisma.LectureDeleteManyArgs> =
  z
    .object({
      where: LectureWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.LectureDeleteManyArgs>;

export default LectureDeleteManyArgsSchema;
