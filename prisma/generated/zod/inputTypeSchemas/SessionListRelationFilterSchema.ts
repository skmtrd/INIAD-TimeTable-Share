import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SessionWhereInputSchema } from "./SessionWhereInputSchema";

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> =
  z
    .object({
      every: z.lazy(() => SessionWhereInputSchema).optional(),
      some: z.lazy(() => SessionWhereInputSchema).optional(),
      none: z.lazy(() => SessionWhereInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.SessionListRelationFilter>;

export default SessionListRelationFilterSchema;
