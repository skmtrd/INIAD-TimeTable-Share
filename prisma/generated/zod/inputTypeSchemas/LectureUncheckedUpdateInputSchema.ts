import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { TimeTableUncheckedUpdateManyWithoutLectureNestedInputSchema } from "./TimeTableUncheckedUpdateManyWithoutLectureNestedInputSchema";

export const LectureUncheckedUpdateInputSchema: z.ZodType<Prisma.LectureUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      timetables: z
        .lazy(() => TimeTableUncheckedUpdateManyWithoutLectureNestedInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.LectureUncheckedUpdateInput>;

export default LectureUncheckedUpdateInputSchema;
