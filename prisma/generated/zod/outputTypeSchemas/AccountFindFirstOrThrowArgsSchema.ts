import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { AccountIncludeSchema } from "../inputTypeSchemas/AccountIncludeSchema";
import { AccountOrderByWithRelationInputSchema } from "../inputTypeSchemas/AccountOrderByWithRelationInputSchema";
import { AccountScalarFieldEnumSchema } from "../inputTypeSchemas/AccountScalarFieldEnumSchema";
import { AccountWhereInputSchema } from "../inputTypeSchemas/AccountWhereInputSchema";
import { AccountWhereUniqueInputSchema } from "../inputTypeSchemas/AccountWhereUniqueInputSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z
  .object({
    id: z.boolean().optional(),
    accountId: z.boolean().optional(),
    providerId: z.boolean().optional(),
    userId: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    idToken: z.boolean().optional(),
    accessTokenExpiresAt: z.boolean().optional(),
    refreshTokenExpiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    password: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: z.lazy(() => AccountIncludeSchema).optional(),
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
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.AccountFindFirstOrThrowArgs>;

export default AccountFindFirstOrThrowArgsSchema;
