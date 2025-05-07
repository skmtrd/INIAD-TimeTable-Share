import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { VerificationCreateInputSchema } from "../inputTypeSchemas/VerificationCreateInputSchema";
import { VerificationUncheckedCreateInputSchema } from "../inputTypeSchemas/VerificationUncheckedCreateInputSchema";
import { VerificationUncheckedUpdateInputSchema } from "../inputTypeSchemas/VerificationUncheckedUpdateInputSchema";
import { VerificationUpdateInputSchema } from "../inputTypeSchemas/VerificationUpdateInputSchema";
import { VerificationWhereUniqueInputSchema } from "../inputTypeSchemas/VerificationWhereUniqueInputSchema";
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

export const VerificationUpsertArgsSchema: z.ZodType<Prisma.VerificationUpsertArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereUniqueInputSchema,
      create: z.union([
        VerificationCreateInputSchema,
        VerificationUncheckedCreateInputSchema,
      ]),
      update: z.union([
        VerificationUpdateInputSchema,
        VerificationUncheckedUpdateInputSchema,
      ]),
    })
    .strict() as z.ZodType<Prisma.VerificationUpsertArgs>;

export default VerificationUpsertArgsSchema;
