import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserIncludeSchema } from "../inputTypeSchemas/UserIncludeSchema";
import { UserOrderByWithRelationInputSchema } from "../inputTypeSchemas/UserOrderByWithRelationInputSchema";
import { UserScalarFieldEnumSchema } from "../inputTypeSchemas/UserScalarFieldEnumSchema";
import { UserWhereInputSchema } from "../inputTypeSchemas/UserWhereInputSchema";
import { UserWhereUniqueInputSchema } from "../inputTypeSchemas/UserWhereUniqueInputSchema";
import { AccountFindManyArgsSchema } from "../outputTypeSchemas/AccountFindManyArgsSchema";
import { SessionFindManyArgsSchema } from "../outputTypeSchemas/SessionFindManyArgsSchema";
import { TimeTableFindManyArgsSchema } from "../outputTypeSchemas/TimeTableFindManyArgsSchema";
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    twitterId: z.boolean().optional(),
    privacyProtection: z.boolean().optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)])
      .optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)])
      .optional(),
    timetables: z
      .union([z.boolean(), z.lazy(() => TimeTableFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: z.lazy(() => UserIncludeSchema).optional(),
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
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict() as z.ZodType<Prisma.UserFindManyArgs>;

export default UserFindManyArgsSchema;
