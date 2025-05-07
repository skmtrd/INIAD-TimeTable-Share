import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { NullsOrderSchema } from "./NullsOrderSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z
  .object({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional(),
  })
  .strict() as z.ZodType<Prisma.SortOrderInput>;

export default SortOrderInputSchema;
