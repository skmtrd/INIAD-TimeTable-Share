import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInputSchema";
import { TimeTableUncheckedCreateNestedManyWithoutUserInputSchema } from "./TimeTableUncheckedCreateNestedManyWithoutUserInputSchema";

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> =
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
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      timetables: z
        .lazy(() => TimeTableUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput>;

export default UserUncheckedCreateWithoutSessionsInputSchema;
