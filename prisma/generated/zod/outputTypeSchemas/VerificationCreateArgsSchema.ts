import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { VerificationCreateInputSchema } from "../inputTypeSchemas/VerificationCreateInputSchema";
import { VerificationUncheckedCreateInputSchema } from "../inputTypeSchemas/VerificationUncheckedCreateInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationSelectSchema: z.ZodType<Prisma.VerificationSelect> = z
  .object({
    id: z.boolean().optional(),
    identifier: z.boolean().optional(),
    value: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict();

export const VerificationCreateArgsSchema: z.ZodType<Prisma.VerificationCreateArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      data: z.union([
        VerificationCreateInputSchema,
        VerificationUncheckedCreateInputSchema,
      ]),
    })
    .strict() as z.ZodType<Prisma.VerificationCreateArgs>;

export default VerificationCreateArgsSchema;
