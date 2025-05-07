import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { SessionWhereInputSchema } from "../inputTypeSchemas/SessionWhereInputSchema";

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> =
  z
    .object({
      where: SessionWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.SessionDeleteManyArgs>;

export default SessionDeleteManyArgsSchema;
