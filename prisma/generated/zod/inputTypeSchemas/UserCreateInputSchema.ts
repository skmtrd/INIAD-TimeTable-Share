import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputSchema } from "./AccountCreateNestedManyWithoutUserInputSchema";
import { SessionCreateNestedManyWithoutUserInputSchema } from "./SessionCreateNestedManyWithoutUserInputSchema";
import { TimeTableCreateNestedManyWithoutUserInputSchema } from "./TimeTableCreateNestedManyWithoutUserInputSchema";

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    twitterId: z.string().optional().nullable(),
    privacyProtection: z.boolean().optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
      .optional(),
    timetables: z
      .lazy(() => TimeTableCreateNestedManyWithoutUserInputSchema)
      .optional(),
  })
  .strict() as z.ZodType<Prisma.UserCreateInput>;

export default UserCreateInputSchema;
