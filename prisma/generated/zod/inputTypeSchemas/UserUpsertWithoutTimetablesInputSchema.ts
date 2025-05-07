import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateWithoutTimetablesInputSchema } from "./UserCreateWithoutTimetablesInputSchema";
import { UserUncheckedCreateWithoutTimetablesInputSchema } from "./UserUncheckedCreateWithoutTimetablesInputSchema";
import { UserUncheckedUpdateWithoutTimetablesInputSchema } from "./UserUncheckedUpdateWithoutTimetablesInputSchema";
import { UserUpdateWithoutTimetablesInputSchema } from "./UserUpdateWithoutTimetablesInputSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const UserUpsertWithoutTimetablesInputSchema: z.ZodType<Prisma.UserUpsertWithoutTimetablesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutTimetablesInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTimetablesInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutTimetablesInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutTimetablesInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.UserUpsertWithoutTimetablesInput>;

export default UserUpsertWithoutTimetablesInputSchema;
