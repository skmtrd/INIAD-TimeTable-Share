import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { VerificationCreateManyInputSchema } from "../inputTypeSchemas/VerificationCreateManyInputSchema";

export const VerificationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        VerificationCreateManyInputSchema,
        VerificationCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.VerificationCreateManyAndReturnArgs>;

export default VerificationCreateManyAndReturnArgsSchema;
