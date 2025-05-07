import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateWithoutLectureInputSchema } from "./TimeTableCreateWithoutLectureInputSchema";
import { TimeTableUncheckedCreateWithoutLectureInputSchema } from "./TimeTableUncheckedCreateWithoutLectureInputSchema";
import { TimeTableUncheckedUpdateWithoutLectureInputSchema } from "./TimeTableUncheckedUpdateWithoutLectureInputSchema";
import { TimeTableUpdateWithoutLectureInputSchema } from "./TimeTableUpdateWithoutLectureInputSchema";
import { TimeTableWhereUniqueInputSchema } from "./TimeTableWhereUniqueInputSchema";

export const TimeTableUpsertWithWhereUniqueWithoutLectureInputSchema: z.ZodType<Prisma.TimeTableUpsertWithWhereUniqueWithoutLectureInput> =
  z
    .object({
      where: z.lazy(() => TimeTableWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => TimeTableUpdateWithoutLectureInputSchema),
        z.lazy(() => TimeTableUncheckedUpdateWithoutLectureInputSchema),
      ]),
      create: z.union([
        z.lazy(() => TimeTableCreateWithoutLectureInputSchema),
        z.lazy(() => TimeTableUncheckedCreateWithoutLectureInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.TimeTableUpsertWithWhereUniqueWithoutLectureInput>;

export default TimeTableUpsertWithWhereUniqueWithoutLectureInputSchema;
