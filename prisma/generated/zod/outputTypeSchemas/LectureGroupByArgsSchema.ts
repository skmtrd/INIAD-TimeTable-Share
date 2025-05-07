import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureOrderByWithAggregationInputSchema } from "../inputTypeSchemas/LectureOrderByWithAggregationInputSchema";
import { LectureScalarFieldEnumSchema } from "../inputTypeSchemas/LectureScalarFieldEnumSchema";
import { LectureScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/LectureScalarWhereWithAggregatesInputSchema";
import { LectureWhereInputSchema } from "../inputTypeSchemas/LectureWhereInputSchema";

export const LectureGroupByArgsSchema: z.ZodType<Prisma.LectureGroupByArgs> = z
  .object({
    where: LectureWhereInputSchema.optional(),
    orderBy: z
      .union([
        LectureOrderByWithAggregationInputSchema.array(),
        LectureOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: LectureScalarFieldEnumSchema.array(),
    having: LectureScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict() as z.ZodType<Prisma.LectureGroupByArgs>;

export default LectureGroupByArgsSchema;
