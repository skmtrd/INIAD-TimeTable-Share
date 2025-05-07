import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SessionCountOrderByAggregateInputSchema } from "./SessionCountOrderByAggregateInputSchema";
import { SessionMaxOrderByAggregateInputSchema } from "./SessionMaxOrderByAggregateInputSchema";
import { SessionMinOrderByAggregateInputSchema } from "./SessionMinOrderByAggregateInputSchema";
import { SortOrderInputSchema } from "./SortOrderInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      userAgent: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.SessionOrderByWithAggregationInput>;

export default SessionOrderByWithAggregationInputSchema;
