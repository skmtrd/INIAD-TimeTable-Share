import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { VerificationCreateManyInputSchema } from "../inputTypeSchemas/VerificationCreateManyInputSchema";

export const VerificationCreateManyArgsSchema: z.ZodType<Prisma.VerificationCreateManyArgs> =
  z
    .object({
      data: z.union([
        VerificationCreateManyInputSchema,
        VerificationCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.VerificationCreateManyArgs>;

export default VerificationCreateManyArgsSchema;
