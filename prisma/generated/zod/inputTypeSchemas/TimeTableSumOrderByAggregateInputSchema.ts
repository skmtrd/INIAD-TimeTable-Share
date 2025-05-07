import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const TimeTableSumOrderByAggregateInputSchema: z.ZodType<Prisma.TimeTableSumOrderByAggregateInput> =
  z
    .object({
      periodNumber: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableSumOrderByAggregateInput>;

export default TimeTableSumOrderByAggregateInputSchema;
