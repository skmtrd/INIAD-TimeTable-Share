import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { AccountOrderByWithAggregationInputSchema } from "../inputTypeSchemas/AccountOrderByWithAggregationInputSchema";
import { AccountScalarFieldEnumSchema } from "../inputTypeSchemas/AccountScalarFieldEnumSchema";
import { AccountScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/AccountScalarWhereWithAggregatesInputSchema";
import { AccountWhereInputSchema } from "../inputTypeSchemas/AccountWhereInputSchema";

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z
  .object({
    where: AccountWhereInputSchema.optional(),
    orderBy: z
      .union([
        AccountOrderByWithAggregationInputSchema.array(),
        AccountOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: AccountScalarFieldEnumSchema.array(),
    having: AccountScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict() as z.ZodType<Prisma.AccountGroupByArgs>;

export default AccountGroupByArgsSchema;
