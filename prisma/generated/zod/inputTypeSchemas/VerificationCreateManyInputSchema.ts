import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const VerificationCreateManyInputSchema: z.ZodType<Prisma.VerificationCreateManyInput> =
  z
    .object({
      id: z.string(),
      identifier: z.string(),
      value: z.string(),
      expiresAt: z.coerce.date(),
      createdAt: z.coerce.date().optional().nullable(),
      updatedAt: z.coerce.date().optional().nullable(),
    })
    .strict() as z.ZodType<Prisma.VerificationCreateManyInput>;

export default VerificationCreateManyInputSchema;
