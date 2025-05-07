import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const TimeTableMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TimeTableMaxOrderByAggregateInput> =
  z
    .object({
      userId: z.lazy(() => SortOrderSchema).optional(),
      lectureId: z.lazy(() => SortOrderSchema).optional(),
      day: z.lazy(() => SortOrderSchema).optional(),
      periodNumber: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableMaxOrderByAggregateInput>;

export default TimeTableMaxOrderByAggregateInputSchema;
