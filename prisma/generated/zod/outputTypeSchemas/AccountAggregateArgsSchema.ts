import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { AccountOrderByWithRelationInputSchema } from "../inputTypeSchemas/AccountOrderByWithRelationInputSchema";
import { AccountWhereInputSchema } from "../inputTypeSchemas/AccountWhereInputSchema";
import { AccountWhereUniqueInputSchema } from "../inputTypeSchemas/AccountWhereUniqueInputSchema";

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> =
  z
    .object({
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.AccountAggregateArgs>;

export default AccountAggregateArgsSchema;
