import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { AccountFindManyArgsSchema } from "../outputTypeSchemas/AccountFindManyArgsSchema";
import { SessionFindManyArgsSchema } from "../outputTypeSchemas/SessionFindManyArgsSchema";
import { TimeTableFindManyArgsSchema } from "../outputTypeSchemas/TimeTableFindManyArgsSchema";
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema";

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

export default UserSelectSchema;
