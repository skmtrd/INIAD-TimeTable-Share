import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { VerificationWhereInputSchema } from "../inputTypeSchemas/VerificationWhereInputSchema";

export const VerificationDeleteManyArgsSchema: z.ZodType<Prisma.VerificationDeleteManyArgs> =
  z
    .object({
      where: VerificationWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.VerificationDeleteManyArgs>;

export default VerificationDeleteManyArgsSchema;
