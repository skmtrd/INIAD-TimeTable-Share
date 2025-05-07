import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const VerificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      value: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.VerificationCountOrderByAggregateInput>;

export default VerificationCountOrderByAggregateInputSchema;
