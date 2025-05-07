import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { AccountIncludeSchema } from "../inputTypeSchemas/AccountIncludeSchema";
import { AccountUncheckedUpdateInputSchema } from "../inputTypeSchemas/AccountUncheckedUpdateInputSchema";
import { AccountUpdateInputSchema } from "../inputTypeSchemas/AccountUpdateInputSchema";
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

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: z.lazy(() => AccountIncludeSchema).optional(),
    data: z.union([
      AccountUpdateInputSchema,
      AccountUncheckedUpdateInputSchema,
    ]),
    where: AccountWhereUniqueInputSchema,
  })
  .strict() as z.ZodType<Prisma.AccountUpdateArgs>;

export default AccountUpdateArgsSchema;
