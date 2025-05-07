import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { SessionOrderByWithAggregationInputSchema } from "../inputTypeSchemas/SessionOrderByWithAggregationInputSchema";
import { SessionScalarFieldEnumSchema } from "../inputTypeSchemas/SessionScalarFieldEnumSchema";
import { SessionScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/SessionScalarWhereWithAggregatesInputSchema";
import { SessionWhereInputSchema } from "../inputTypeSchemas/SessionWhereInputSchema";

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z
  .object({
    where: SessionWhereInputSchema.optional(),
    orderBy: z
      .union([
        SessionOrderByWithAggregationInputSchema.array(),
        SessionOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: SessionScalarFieldEnumSchema.array(),
    having: SessionScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict() as z.ZodType<Prisma.SessionGroupByArgs>;

export default SessionGroupByArgsSchema;
