import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { LectureCreateOrConnectWithoutTimetablesInputSchema } from "./LectureCreateOrConnectWithoutTimetablesInputSchema";
import { LectureCreateWithoutTimetablesInputSchema } from "./LectureCreateWithoutTimetablesInputSchema";
import { LectureUncheckedCreateWithoutTimetablesInputSchema } from "./LectureUncheckedCreateWithoutTimetablesInputSchema";
import { LectureUncheckedUpdateWithoutTimetablesInputSchema } from "./LectureUncheckedUpdateWithoutTimetablesInputSchema";
import { LectureUpdateToOneWithWhereWithoutTimetablesInputSchema } from "./LectureUpdateToOneWithWhereWithoutTimetablesInputSchema";
import { LectureUpdateWithoutTimetablesInputSchema } from "./LectureUpdateWithoutTimetablesInputSchema";
import { LectureUpsertWithoutTimetablesInputSchema } from "./LectureUpsertWithoutTimetablesInputSchema";
import { LectureWhereUniqueInputSchema } from "./LectureWhereUniqueInputSchema";

export const LectureUpdateOneRequiredWithoutTimetablesNestedInputSchema: z.ZodType<Prisma.LectureUpdateOneRequiredWithoutTimetablesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LectureCreateWithoutTimetablesInputSchema),
          z.lazy(() => LectureUncheckedCreateWithoutTimetablesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LectureCreateOrConnectWithoutTimetablesInputSchema)
        .optional(),
      upsert: z
        .lazy(() => LectureUpsertWithoutTimetablesInputSchema)
        .optional(),
      connect: z.lazy(() => LectureWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => LectureUpdateToOneWithWhereWithoutTimetablesInputSchema),
          z.lazy(() => LectureUpdateWithoutTimetablesInputSchema),
          z.lazy(() => LectureUncheckedUpdateWithoutTimetablesInputSchema),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.LectureUpdateOneRequiredWithoutTimetablesNestedInput>;

export default LectureUpdateOneRequiredWithoutTimetablesNestedInputSchema;
