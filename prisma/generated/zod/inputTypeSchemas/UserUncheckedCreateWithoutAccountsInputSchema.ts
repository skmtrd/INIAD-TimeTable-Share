import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInputSchema";
import { TimeTableUncheckedCreateNestedManyWithoutUserInputSchema } from "./TimeTableUncheckedCreateNestedManyWithoutUserInputSchema";

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> =
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
      timetables: z
        .lazy(() => TimeTableUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput>;

export default UserUncheckedCreateWithoutAccountsInputSchema;
