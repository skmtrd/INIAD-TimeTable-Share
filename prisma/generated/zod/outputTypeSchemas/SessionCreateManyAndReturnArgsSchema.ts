import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { SessionCreateManyInputSchema } from "../inputTypeSchemas/SessionCreateManyInputSchema";

export const SessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        SessionCreateManyInputSchema,
        SessionCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.SessionCreateManyAndReturnArgs>;

export default SessionCreateManyAndReturnArgsSchema;
