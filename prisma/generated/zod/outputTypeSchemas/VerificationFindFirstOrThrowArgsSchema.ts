import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { VerificationOrderByWithRelationInputSchema } from "../inputTypeSchemas/VerificationOrderByWithRelationInputSchema";
import { VerificationScalarFieldEnumSchema } from "../inputTypeSchemas/VerificationScalarFieldEnumSchema";
import { VerificationWhereInputSchema } from "../inputTypeSchemas/VerificationWhereInputSchema";
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

export const VerificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindFirstOrThrowArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithRelationInputSchema.array(),
          VerificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          VerificationScalarFieldEnumSchema,
          VerificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.VerificationFindFirstOrThrowArgs>;

export default VerificationFindFirstOrThrowArgsSchema;
