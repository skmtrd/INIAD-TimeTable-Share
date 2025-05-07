import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { TimeTableListRelationFilterSchema } from "./TimeTableListRelationFilterSchema";

export const LectureWhereInputSchema: z.ZodType<Prisma.LectureWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LectureWhereInputSchema),
        z.lazy(() => LectureWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LectureWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LectureWhereInputSchema),
        z.lazy(() => LectureWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    timetables: z.lazy(() => TimeTableListRelationFilterSchema).optional(),
  })
  .strict() as z.ZodType<Prisma.LectureWhereInput>;

export default LectureWhereInputSchema;
