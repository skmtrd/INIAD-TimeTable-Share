import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeWithAggregatesFilterSchema } from "./DateTimeWithAggregatesFilterSchema";
import { IntWithAggregatesFilterSchema } from "./IntWithAggregatesFilterSchema";
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema";

export const TimeTableScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TimeTableScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TimeTableScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TimeTableScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TimeTableScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TimeTableScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TimeTableScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      userId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      lectureId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      day: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      periodNumber: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableScalarWhereWithAggregatesInput>;

export default TimeTableScalarWhereWithAggregatesInputSchema;
