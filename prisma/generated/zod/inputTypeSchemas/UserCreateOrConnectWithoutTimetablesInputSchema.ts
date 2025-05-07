import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateWithoutTimetablesInputSchema } from "./UserCreateWithoutTimetablesInputSchema";
import { UserUncheckedCreateWithoutTimetablesInputSchema } from "./UserUncheckedCreateWithoutTimetablesInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserCreateOrConnectWithoutTimetablesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTimetablesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutTimetablesInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutTimetablesInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.UserCreateOrConnectWithoutTimetablesInput>;

export default UserCreateOrConnectWithoutTimetablesInputSchema;
