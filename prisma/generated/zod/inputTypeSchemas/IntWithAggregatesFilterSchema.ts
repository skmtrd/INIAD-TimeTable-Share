import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { NestedFloatFilterSchema } from "./NestedFloatFilterSchema";
import { NestedIntFilterSchema } from "./NestedIntFilterSchema";
import { NestedIntWithAggregatesFilterSchema } from "./NestedIntWithAggregatesFilterSchema";

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.IntWithAggregatesFilter>;

export default IntWithAggregatesFilterSchema;
