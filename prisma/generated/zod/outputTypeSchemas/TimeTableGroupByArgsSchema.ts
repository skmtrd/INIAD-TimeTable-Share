import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { TimeTableOrderByWithAggregationInputSchema } from "../inputTypeSchemas/TimeTableOrderByWithAggregationInputSchema";
import { TimeTableScalarFieldEnumSchema } from "../inputTypeSchemas/TimeTableScalarFieldEnumSchema";
import { TimeTableScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/TimeTableScalarWhereWithAggregatesInputSchema";
import { TimeTableWhereInputSchema } from "../inputTypeSchemas/TimeTableWhereInputSchema";

export const TimeTableGroupByArgsSchema: z.ZodType<Prisma.TimeTableGroupByArgs> =
  z
    .object({
      where: TimeTableWhereInputSchema.optional(),
      orderBy: z
        .union([
          TimeTableOrderByWithAggregationInputSchema.array(),
          TimeTableOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: TimeTableScalarFieldEnumSchema.array(),
      having: TimeTableScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableGroupByArgs>;

export default TimeTableGroupByArgsSchema;
