import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { LectureCreateNestedOneWithoutTimetablesInputSchema } from "./LectureCreateNestedOneWithoutTimetablesInputSchema";
import { UserCreateNestedOneWithoutTimetablesInputSchema } from "./UserCreateNestedOneWithoutTimetablesInputSchema";

export const TimeTableCreateInputSchema: z.ZodType<Prisma.TimeTableCreateInput> =
  z
    .object({
      day: z.string(),
      periodNumber: z.number().int(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutTimetablesInputSchema),
      lecture: z.lazy(() => LectureCreateNestedOneWithoutTimetablesInputSchema),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateInput>;

export default TimeTableCreateInputSchema;
