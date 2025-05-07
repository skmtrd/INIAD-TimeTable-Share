import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { IntFilterSchema } from "./IntFilterSchema";
import { LectureScalarRelationFilterSchema } from "./LectureScalarRelationFilterSchema";
import { LectureWhereInputSchema } from "./LectureWhereInputSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { UserScalarRelationFilterSchema } from "./UserScalarRelationFilterSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const TimeTableWhereInputSchema: z.ZodType<Prisma.TimeTableWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TimeTableWhereInputSchema),
          z.lazy(() => TimeTableWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TimeTableWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TimeTableWhereInputSchema),
          z.lazy(() => TimeTableWhereInputSchema).array(),
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
      user: z
        .union([
          z.lazy(() => UserScalarRelationFilterSchema),
          z.lazy(() => UserWhereInputSchema),
        ])
        .optional(),
      lecture: z
        .union([
          z.lazy(() => LectureScalarRelationFilterSchema),
          z.lazy(() => LectureWhereInputSchema),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableWhereInput>;

export default TimeTableWhereInputSchema;
