import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserUncheckedUpdateWithoutAccountsInputSchema } from "./UserUncheckedUpdateWithoutAccountsInputSchema";
import { UserUpdateWithoutAccountsInputSchema } from "./UserUpdateWithoutAccountsInputSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput>;

export default UserUpdateToOneWithWhereWithoutAccountsInputSchema;
