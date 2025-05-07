import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureOrderByWithRelationInputSchema } from "../inputTypeSchemas/LectureOrderByWithRelationInputSchema";
import { LectureWhereInputSchema } from "../inputTypeSchemas/LectureWhereInputSchema";
import { LectureWhereUniqueInputSchema } from "../inputTypeSchemas/LectureWhereUniqueInputSchema";

export const LectureAggregateArgsSchema: z.ZodType<Prisma.LectureAggregateArgs> =
  z
    .object({
      where: LectureWhereInputSchema.optional(),
      orderBy: z
        .union([
          LectureOrderByWithRelationInputSchema.array(),
          LectureOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LectureWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.LectureAggregateArgs>;

export default LectureAggregateArgsSchema;
