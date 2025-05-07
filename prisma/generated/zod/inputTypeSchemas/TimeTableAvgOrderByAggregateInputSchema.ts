import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const TimeTableAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TimeTableAvgOrderByAggregateInput> =
  z
    .object({
      periodNumber: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableAvgOrderByAggregateInput>;

export default TimeTableAvgOrderByAggregateInputSchema;
