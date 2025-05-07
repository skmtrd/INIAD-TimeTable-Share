import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const TimeTableOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TimeTableOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableOrderByRelationAggregateInput>;

export default TimeTableOrderByRelationAggregateInputSchema;
