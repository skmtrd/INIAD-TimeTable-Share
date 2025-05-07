import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateWithoutAccountsInputSchema } from "./UserCreateWithoutAccountsInputSchema";
import { UserUncheckedCreateWithoutAccountsInputSchema } from "./UserUncheckedCreateWithoutAccountsInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput>;

export default UserCreateOrConnectWithoutAccountsInputSchema;
