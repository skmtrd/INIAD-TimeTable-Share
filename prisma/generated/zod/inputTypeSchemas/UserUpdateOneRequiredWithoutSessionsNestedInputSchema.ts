import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateOrConnectWithoutSessionsInputSchema } from "./UserCreateOrConnectWithoutSessionsInputSchema";
import { UserCreateWithoutSessionsInputSchema } from "./UserCreateWithoutSessionsInputSchema";
import { UserUncheckedCreateWithoutSessionsInputSchema } from "./UserUncheckedCreateWithoutSessionsInputSchema";
import { UserUncheckedUpdateWithoutSessionsInputSchema } from "./UserUncheckedUpdateWithoutSessionsInputSchema";
import { UserUpdateToOneWithWhereWithoutSessionsInputSchema } from "./UserUpdateToOneWithWhereWithoutSessionsInputSchema";
import { UserUpdateWithoutSessionsInputSchema } from "./UserUpdateWithoutSessionsInputSchema";
import { UserUpsertWithoutSessionsInputSchema } from "./UserUpsertWithoutSessionsInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutSessionsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutSessionsInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),
          z.lazy(() => UserUpdateWithoutSessionsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput>;

export default UserUpdateOneRequiredWithoutSessionsNestedInputSchema;
