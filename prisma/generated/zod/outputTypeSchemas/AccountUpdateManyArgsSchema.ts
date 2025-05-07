import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { AccountUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/AccountUncheckedUpdateManyInputSchema";
import { AccountUpdateManyMutationInputSchema } from "../inputTypeSchemas/AccountUpdateManyMutationInputSchema";
import { AccountWhereInputSchema } from "../inputTypeSchemas/AccountWhereInputSchema";

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> =
  z
    .object({
      data: z.union([
        AccountUpdateManyMutationInputSchema,
        AccountUncheckedUpdateManyInputSchema,
      ]),
      where: AccountWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.AccountUpdateManyArgs>;

export default AccountUpdateManyArgsSchema;
