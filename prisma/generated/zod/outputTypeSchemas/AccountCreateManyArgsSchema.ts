import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { AccountCreateManyInputSchema } from "../inputTypeSchemas/AccountCreateManyInputSchema";

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> =
  z
    .object({
      data: z.union([
        AccountCreateManyInputSchema,
        AccountCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.AccountCreateManyArgs>;

export default AccountCreateManyArgsSchema;
