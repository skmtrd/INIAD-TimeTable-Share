import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { AccountUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/AccountUncheckedUpdateManyInputSchema";
import { AccountUpdateManyMutationInputSchema } from "../inputTypeSchemas/AccountUpdateManyMutationInputSchema";
import { AccountWhereInputSchema } from "../inputTypeSchemas/AccountWhereInputSchema";

export const AccountUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        AccountUpdateManyMutationInputSchema,
        AccountUncheckedUpdateManyInputSchema,
      ]),
      where: AccountWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.AccountUpdateManyAndReturnArgs>;

export default AccountUpdateManyAndReturnArgsSchema;
