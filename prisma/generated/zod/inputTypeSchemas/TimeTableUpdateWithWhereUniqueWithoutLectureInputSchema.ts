import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableUncheckedUpdateWithoutLectureInputSchema } from "./TimeTableUncheckedUpdateWithoutLectureInputSchema";
import { TimeTableUpdateWithoutLectureInputSchema } from "./TimeTableUpdateWithoutLectureInputSchema";
import { TimeTableWhereUniqueInputSchema } from "./TimeTableWhereUniqueInputSchema";

export const TimeTableUpdateWithWhereUniqueWithoutLectureInputSchema: z.ZodType<Prisma.TimeTableUpdateWithWhereUniqueWithoutLectureInput> =
  z
    .object({
      where: z.lazy(() => TimeTableWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => TimeTableUpdateWithoutLectureInputSchema),
        z.lazy(() => TimeTableUncheckedUpdateWithoutLectureInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.TimeTableUpdateWithWhereUniqueWithoutLectureInput>;

export default TimeTableUpdateWithWhereUniqueWithoutLectureInputSchema;
