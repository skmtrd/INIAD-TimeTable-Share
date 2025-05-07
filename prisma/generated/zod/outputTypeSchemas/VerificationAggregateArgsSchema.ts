import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { VerificationOrderByWithRelationInputSchema } from "../inputTypeSchemas/VerificationOrderByWithRelationInputSchema";
import { VerificationWhereInputSchema } from "../inputTypeSchemas/VerificationWhereInputSchema";
import { VerificationWhereUniqueInputSchema } from "../inputTypeSchemas/VerificationWhereUniqueInputSchema";

export const VerificationAggregateArgsSchema: z.ZodType<Prisma.VerificationAggregateArgs> =
  z
    .object({
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithRelationInputSchema.array(),
          VerificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.VerificationAggregateArgs>;

export default VerificationAggregateArgsSchema;
