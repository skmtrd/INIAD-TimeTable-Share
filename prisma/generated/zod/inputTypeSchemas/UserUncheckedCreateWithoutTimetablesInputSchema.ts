import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInputSchema";
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInputSchema";

export const UserUncheckedCreateWithoutTimetablesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTimetablesInput> =
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
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.UserUncheckedCreateWithoutTimetablesInput>;

export default UserUncheckedCreateWithoutTimetablesInputSchema;
