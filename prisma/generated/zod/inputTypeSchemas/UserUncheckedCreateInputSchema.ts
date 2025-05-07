import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInputSchema";
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInputSchema";
import { TimeTableUncheckedCreateNestedManyWithoutUserInputSchema } from "./TimeTableUncheckedCreateNestedManyWithoutUserInputSchema";

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> =
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
      timetables: z
        .lazy(() => TimeTableUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.UserUncheckedCreateInput>;

export default UserUncheckedCreateInputSchema;
