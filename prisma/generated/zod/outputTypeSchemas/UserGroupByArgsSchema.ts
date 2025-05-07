import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserOrderByWithAggregationInputSchema } from "../inputTypeSchemas/UserOrderByWithAggregationInputSchema";
import { UserScalarFieldEnumSchema } from "../inputTypeSchemas/UserScalarFieldEnumSchema";
import { UserScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/UserScalarWhereWithAggregatesInputSchema";
import { UserWhereInputSchema } from "../inputTypeSchemas/UserWhereInputSchema";

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithAggregationInputSchema.array(),
        UserOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: UserScalarFieldEnumSchema.array(),
    having: UserScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict() as z.ZodType<Prisma.UserGroupByArgs>;

export default UserGroupByArgsSchema;
