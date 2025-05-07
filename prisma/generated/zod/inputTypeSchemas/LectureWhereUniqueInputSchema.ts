import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { LectureWhereInputSchema } from "./LectureWhereInputSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { TimeTableListRelationFilterSchema } from "./TimeTableListRelationFilterSchema";

export const LectureWhereUniqueInputSchema: z.ZodType<Prisma.LectureWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid(),
    })
    .and(
      z
        .object({
          id: z.string().cuid().optional(),
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
          name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          timetables: z
            .lazy(() => TimeTableListRelationFilterSchema)
            .optional(),
        })
        .strict(),
    ) as z.ZodType<Prisma.LectureWhereUniqueInput>;

export default LectureWhereUniqueInputSchema;
