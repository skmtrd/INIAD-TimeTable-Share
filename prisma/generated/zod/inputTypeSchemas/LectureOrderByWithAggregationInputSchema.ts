import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { LectureCountOrderByAggregateInputSchema } from "./LectureCountOrderByAggregateInputSchema";
import { LectureMaxOrderByAggregateInputSchema } from "./LectureMaxOrderByAggregateInputSchema";
import { LectureMinOrderByAggregateInputSchema } from "./LectureMinOrderByAggregateInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const LectureOrderByWithAggregationInputSchema: z.ZodType<Prisma.LectureOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => LectureCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => LectureMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => LectureMinOrderByAggregateInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.LectureOrderByWithAggregationInput>;

export default LectureOrderByWithAggregationInputSchema;
