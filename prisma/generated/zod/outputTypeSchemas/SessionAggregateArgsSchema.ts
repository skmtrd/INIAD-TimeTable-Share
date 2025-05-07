import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { SessionOrderByWithRelationInputSchema } from "../inputTypeSchemas/SessionOrderByWithRelationInputSchema";
import { SessionWhereInputSchema } from "../inputTypeSchemas/SessionWhereInputSchema";
import { SessionWhereUniqueInputSchema } from "../inputTypeSchemas/SessionWhereUniqueInputSchema";

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> =
  z
    .object({
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.SessionAggregateArgs>;

export default SessionAggregateArgsSchema;
