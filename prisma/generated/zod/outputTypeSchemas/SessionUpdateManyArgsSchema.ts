import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { SessionUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/SessionUncheckedUpdateManyInputSchema";
import { SessionUpdateManyMutationInputSchema } from "../inputTypeSchemas/SessionUpdateManyMutationInputSchema";
import { SessionWhereInputSchema } from "../inputTypeSchemas/SessionWhereInputSchema";

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> =
  z
    .object({
      data: z.union([
        SessionUpdateManyMutationInputSchema,
        SessionUncheckedUpdateManyInputSchema,
      ]),
      where: SessionWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.SessionUpdateManyArgs>;

export default SessionUpdateManyArgsSchema;
