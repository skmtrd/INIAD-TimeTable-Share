import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateOrConnectWithoutTimetablesInputSchema } from "./UserCreateOrConnectWithoutTimetablesInputSchema";
import { UserCreateWithoutTimetablesInputSchema } from "./UserCreateWithoutTimetablesInputSchema";
import { UserUncheckedCreateWithoutTimetablesInputSchema } from "./UserUncheckedCreateWithoutTimetablesInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserCreateNestedOneWithoutTimetablesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTimetablesInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.UserCreateNestedOneWithoutTimetablesInput>;

export default UserCreateNestedOneWithoutTimetablesInputSchema;
