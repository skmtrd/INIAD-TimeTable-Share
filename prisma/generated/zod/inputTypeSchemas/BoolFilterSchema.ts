import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { NestedBoolFilterSchema } from "./NestedBoolFilterSchema";

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict() as z.ZodType<Prisma.BoolFilter>;

export default BoolFilterSchema;
