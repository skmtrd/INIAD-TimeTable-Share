import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountCreateManyUserInputSchema } from "./AccountCreateManyUserInputSchema";

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => AccountCreateManyUserInputSchema),
        z.lazy(() => AccountCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.AccountCreateManyUserInputEnvelope>;

export default AccountCreateManyUserInputEnvelopeSchema;
