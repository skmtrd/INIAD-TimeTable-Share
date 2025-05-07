import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { IntFilterSchema } from "./IntFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";

export const TimeTableScalarWhereInputSchema: z.ZodType<Prisma.TimeTableScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TimeTableScalarWhereInputSchema),
          z.lazy(() => TimeTableScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TimeTableScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TimeTableScalarWhereInputSchema),
          z.lazy(() => TimeTableScalarWhereInputSchema).array(),
        ])
        .optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      lectureId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      day: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      periodNumber: z
        .union([z.lazy(() => IntFilterSchema), z.number()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableScalarWhereInput>;

export default TimeTableScalarWhereInputSchema;
