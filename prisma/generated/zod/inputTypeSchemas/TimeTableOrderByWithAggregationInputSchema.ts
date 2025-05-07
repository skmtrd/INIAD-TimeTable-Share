import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";
import { TimeTableAvgOrderByAggregateInputSchema } from "./TimeTableAvgOrderByAggregateInputSchema";
import { TimeTableCountOrderByAggregateInputSchema } from "./TimeTableCountOrderByAggregateInputSchema";
import { TimeTableMaxOrderByAggregateInputSchema } from "./TimeTableMaxOrderByAggregateInputSchema";
import { TimeTableMinOrderByAggregateInputSchema } from "./TimeTableMinOrderByAggregateInputSchema";
import { TimeTableSumOrderByAggregateInputSchema } from "./TimeTableSumOrderByAggregateInputSchema";

export const TimeTableOrderByWithAggregationInputSchema: z.ZodType<Prisma.TimeTableOrderByWithAggregationInput> =
  z
    .object({
      userId: z.lazy(() => SortOrderSchema).optional(),
      lectureId: z.lazy(() => SortOrderSchema).optional(),
      day: z.lazy(() => SortOrderSchema).optional(),
      periodNumber: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => TimeTableCountOrderByAggregateInputSchema)
        .optional(),
      _avg: z.lazy(() => TimeTableAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => TimeTableMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => TimeTableMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => TimeTableSumOrderByAggregateInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableOrderByWithAggregationInput>;

export default TimeTableOrderByWithAggregationInputSchema;
