import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { TimeTableOrderByWithRelationInputSchema } from "../inputTypeSchemas/TimeTableOrderByWithRelationInputSchema";
import { TimeTableWhereInputSchema } from "../inputTypeSchemas/TimeTableWhereInputSchema";
import { TimeTableWhereUniqueInputSchema } from "../inputTypeSchemas/TimeTableWhereUniqueInputSchema";

export const TimeTableAggregateArgsSchema: z.ZodType<Prisma.TimeTableAggregateArgs> =
  z
    .object({
      where: TimeTableWhereInputSchema.optional(),
      orderBy: z
        .union([
          TimeTableOrderByWithRelationInputSchema.array(),
          TimeTableOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TimeTableWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableAggregateArgs>;

export default TimeTableAggregateArgsSchema;
