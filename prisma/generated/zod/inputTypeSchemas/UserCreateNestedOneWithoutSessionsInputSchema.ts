import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateOrConnectWithoutSessionsInputSchema } from "./UserCreateOrConnectWithoutSessionsInputSchema";
import { UserCreateWithoutSessionsInputSchema } from "./UserCreateWithoutSessionsInputSchema";
import { UserUncheckedCreateWithoutSessionsInputSchema } from "./UserUncheckedCreateWithoutSessionsInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput>;

export default UserCreateNestedOneWithoutSessionsInputSchema;
