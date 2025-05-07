import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { LectureUncheckedUpdateWithoutTimetablesInputSchema } from "./LectureUncheckedUpdateWithoutTimetablesInputSchema";
import { LectureUpdateWithoutTimetablesInputSchema } from "./LectureUpdateWithoutTimetablesInputSchema";
import { LectureWhereInputSchema } from "./LectureWhereInputSchema";

export const LectureUpdateToOneWithWhereWithoutTimetablesInputSchema: z.ZodType<Prisma.LectureUpdateToOneWithWhereWithoutTimetablesInput> =
  z
    .object({
      where: z.lazy(() => LectureWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => LectureUpdateWithoutTimetablesInputSchema),
        z.lazy(() => LectureUncheckedUpdateWithoutTimetablesInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.LectureUpdateToOneWithWhereWithoutTimetablesInput>;

export default LectureUpdateToOneWithWhereWithoutTimetablesInputSchema;
