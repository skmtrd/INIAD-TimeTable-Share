import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { VerificationUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/VerificationUncheckedUpdateManyInputSchema";
import { VerificationUpdateManyMutationInputSchema } from "../inputTypeSchemas/VerificationUpdateManyMutationInputSchema";
import { VerificationWhereInputSchema } from "../inputTypeSchemas/VerificationWhereInputSchema";

export const VerificationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        VerificationUpdateManyMutationInputSchema,
        VerificationUncheckedUpdateManyInputSchema,
      ]),
      where: VerificationWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.VerificationUpdateManyAndReturnArgs>;

export default VerificationUpdateManyAndReturnArgsSchema;
