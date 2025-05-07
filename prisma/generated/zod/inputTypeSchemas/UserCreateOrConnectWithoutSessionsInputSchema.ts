import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateWithoutSessionsInputSchema } from "./UserCreateWithoutSessionsInputSchema";
import { UserUncheckedCreateWithoutSessionsInputSchema } from "./UserUncheckedCreateWithoutSessionsInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput>;

export default UserCreateOrConnectWithoutSessionsInputSchema;
