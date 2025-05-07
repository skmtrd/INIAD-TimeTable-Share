import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema";
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema";
import { LectureUpdateOneRequiredWithoutTimetablesNestedInputSchema } from "./LectureUpdateOneRequiredWithoutTimetablesNestedInputSchema";
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema";
import { UserUpdateOneRequiredWithoutTimetablesNestedInputSchema } from "./UserUpdateOneRequiredWithoutTimetablesNestedInputSchema";

export const TimeTableUpdateInputSchema: z.ZodType<Prisma.TimeTableUpdateInput> =
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
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutTimetablesNestedInputSchema)
        .optional(),
      lecture: z
        .lazy(() => LectureUpdateOneRequiredWithoutTimetablesNestedInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableUpdateInput>;

export default TimeTableUpdateInputSchema;
