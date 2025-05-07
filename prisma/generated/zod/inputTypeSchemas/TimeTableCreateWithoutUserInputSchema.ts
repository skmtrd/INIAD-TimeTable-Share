import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { LectureCreateNestedOneWithoutTimetablesInputSchema } from "./LectureCreateNestedOneWithoutTimetablesInputSchema";

export const TimeTableCreateWithoutUserInputSchema: z.ZodType<Prisma.TimeTableCreateWithoutUserInput> =
  z
    .object({
      day: z.string(),
      periodNumber: z.number().int(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      lecture: z.lazy(() => LectureCreateNestedOneWithoutTimetablesInputSchema),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateWithoutUserInput>;

export default TimeTableCreateWithoutUserInputSchema;
