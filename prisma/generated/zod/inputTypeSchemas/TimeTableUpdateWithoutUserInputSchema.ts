import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { LectureUpdateOneRequiredWithoutTimetablesNestedInputSchema } from "./LectureUpdateOneRequiredWithoutTimetablesNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";

export const TimeTableUpdateWithoutUserInputSchema: z.ZodType<Prisma.TimeTableUpdateWithoutUserInput> =
  z
    .object({
      day: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      periodNumber: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
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
      lecture: z
        .lazy(() => LectureUpdateOneRequiredWithoutTimetablesNestedInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableUpdateWithoutUserInput>;

export default TimeTableUpdateWithoutUserInputSchema;
