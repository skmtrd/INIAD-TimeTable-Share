import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserUncheckedUpdateWithoutTimetablesInputSchema } from "./UserUncheckedUpdateWithoutTimetablesInputSchema";
import { UserUpdateWithoutTimetablesInputSchema } from "./UserUpdateWithoutTimetablesInputSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const UserUpdateToOneWithWhereWithoutTimetablesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTimetablesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutTimetablesInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTimetablesInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTimetablesInput>;

export default UserUpdateToOneWithWhereWithoutTimetablesInputSchema;
