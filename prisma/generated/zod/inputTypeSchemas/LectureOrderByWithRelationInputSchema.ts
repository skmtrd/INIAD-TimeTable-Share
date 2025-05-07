import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";
import { TimeTableOrderByRelationAggregateInputSchema } from "./TimeTableOrderByRelationAggregateInputSchema";

export const LectureOrderByWithRelationInputSchema: z.ZodType<Prisma.LectureOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      timetables: z
        .lazy(() => TimeTableOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.LectureOrderByWithRelationInput>;

export default LectureOrderByWithRelationInputSchema;
