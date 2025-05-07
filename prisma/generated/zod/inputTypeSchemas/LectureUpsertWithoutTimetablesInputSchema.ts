import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { LectureCreateWithoutTimetablesInputSchema } from "./LectureCreateWithoutTimetablesInputSchema";
import { LectureUncheckedCreateWithoutTimetablesInputSchema } from "./LectureUncheckedCreateWithoutTimetablesInputSchema";
import { LectureUncheckedUpdateWithoutTimetablesInputSchema } from "./LectureUncheckedUpdateWithoutTimetablesInputSchema";
import { LectureUpdateWithoutTimetablesInputSchema } from "./LectureUpdateWithoutTimetablesInputSchema";
import { LectureWhereInputSchema } from "./LectureWhereInputSchema";

export const LectureUpsertWithoutTimetablesInputSchema: z.ZodType<Prisma.LectureUpsertWithoutTimetablesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => LectureUpdateWithoutTimetablesInputSchema),
        z.lazy(() => LectureUncheckedUpdateWithoutTimetablesInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LectureCreateWithoutTimetablesInputSchema),
        z.lazy(() => LectureUncheckedCreateWithoutTimetablesInputSchema),
      ]),
      where: z.lazy(() => LectureWhereInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.LectureUpsertWithoutTimetablesInput>;

export default LectureUpsertWithoutTimetablesInputSchema;
