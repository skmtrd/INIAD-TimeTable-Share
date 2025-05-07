import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableWhereInputSchema } from "./TimeTableWhereInputSchema";

export const TimeTableListRelationFilterSchema: z.ZodType<Prisma.TimeTableListRelationFilter> =
  z
    .object({
      every: z.lazy(() => TimeTableWhereInputSchema).optional(),
      some: z.lazy(() => TimeTableWhereInputSchema).optional(),
      none: z.lazy(() => TimeTableWhereInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableListRelationFilter>;

export default TimeTableListRelationFilterSchema;
