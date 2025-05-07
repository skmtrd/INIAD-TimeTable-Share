import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserOrderByWithRelationInputSchema } from "../inputTypeSchemas/UserOrderByWithRelationInputSchema";
import { UserWhereInputSchema } from "../inputTypeSchemas/UserWhereInputSchema";
import { UserWhereUniqueInputSchema } from "../inputTypeSchemas/UserWhereUniqueInputSchema";

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict() as z.ZodType<Prisma.UserAggregateArgs>;

export default UserAggregateArgsSchema;
