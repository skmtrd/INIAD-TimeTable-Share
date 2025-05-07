import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputSchema } from "./AccountCreateNestedManyWithoutUserInputSchema";
import { SessionCreateNestedManyWithoutUserInputSchema } from "./SessionCreateNestedManyWithoutUserInputSchema";

export const UserCreateWithoutTimetablesInputSchema: z.ZodType<Prisma.UserCreateWithoutTimetablesInput> =
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
      sessions: z
        .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.UserCreateWithoutTimetablesInput>;

export default UserCreateWithoutTimetablesInputSchema;
