import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputSchema } from "./AccountCreateNestedManyWithoutUserInputSchema";
import { TimeTableCreateNestedManyWithoutUserInputSchema } from "./TimeTableCreateNestedManyWithoutUserInputSchema";

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> =
  z
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
      accounts: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      timetables: z
        .lazy(() => TimeTableCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.UserCreateWithoutSessionsInput>;

export default UserCreateWithoutSessionsInputSchema;
