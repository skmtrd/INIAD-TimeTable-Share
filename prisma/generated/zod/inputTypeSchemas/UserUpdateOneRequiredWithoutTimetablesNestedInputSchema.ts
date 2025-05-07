import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateOrConnectWithoutTimetablesInputSchema } from "./UserCreateOrConnectWithoutTimetablesInputSchema";
import { UserCreateWithoutTimetablesInputSchema } from "./UserCreateWithoutTimetablesInputSchema";
import { UserUncheckedCreateWithoutTimetablesInputSchema } from "./UserUncheckedCreateWithoutTimetablesInputSchema";
import { UserUncheckedUpdateWithoutTimetablesInputSchema } from "./UserUncheckedUpdateWithoutTimetablesInputSchema";
import { UserUpdateToOneWithWhereWithoutTimetablesInputSchema } from "./UserUpdateToOneWithWhereWithoutTimetablesInputSchema";
import { UserUpdateWithoutTimetablesInputSchema } from "./UserUpdateWithoutTimetablesInputSchema";
import { UserUpsertWithoutTimetablesInputSchema } from "./UserUpsertWithoutTimetablesInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserUpdateOneRequiredWithoutTimetablesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTimetablesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutTimetablesInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutTimetablesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutTimetablesInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutTimetablesInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutTimetablesInputSchema),
          z.lazy(() => UserUpdateWithoutTimetablesInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutTimetablesInputSchema),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTimetablesNestedInput>;

export default UserUpdateOneRequiredWithoutTimetablesNestedInputSchema;
