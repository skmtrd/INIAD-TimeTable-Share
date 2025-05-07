import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { SessionCreateManyInputSchema } from "../inputTypeSchemas/SessionCreateManyInputSchema";

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> =
  z
    .object({
      data: z.union([
        SessionCreateManyInputSchema,
        SessionCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.SessionCreateManyArgs>;

export default SessionCreateManyArgsSchema;
