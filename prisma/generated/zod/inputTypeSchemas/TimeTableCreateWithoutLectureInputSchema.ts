import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateNestedOneWithoutTimetablesInputSchema } from "./UserCreateNestedOneWithoutTimetablesInputSchema";

export const TimeTableCreateWithoutLectureInputSchema: z.ZodType<Prisma.TimeTableCreateWithoutLectureInput> =
  z
    .object({
      day: z.string(),
      periodNumber: z.number().int(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutTimetablesInputSchema),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateWithoutLectureInput>;

export default TimeTableCreateWithoutLectureInputSchema;
