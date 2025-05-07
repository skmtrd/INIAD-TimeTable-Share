import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountUncheckedUpdateWithoutUserInputSchema } from "./AccountUncheckedUpdateWithoutUserInputSchema";
import { AccountUpdateWithoutUserInputSchema } from "./AccountUpdateWithoutUserInputSchema";
import { AccountWhereUniqueInputSchema } from "./AccountWhereUniqueInputSchema";

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => AccountUpdateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput>;

export default AccountUpdateWithWhereUniqueWithoutUserInputSchema;
