import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { NestedBoolFilterSchema } from "./NestedBoolFilterSchema";
import { NestedBoolWithAggregatesFilterSchema } from "./NestedBoolWithAggregatesFilterSchema";
import { NestedIntFilterSchema } from "./NestedIntFilterSchema";

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.BoolWithAggregatesFilter>;

export default BoolWithAggregatesFilterSchema;
