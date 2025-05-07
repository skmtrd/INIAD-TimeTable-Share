import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateWithoutLectureInputSchema } from "./TimeTableCreateWithoutLectureInputSchema";
import { TimeTableUncheckedCreateWithoutLectureInputSchema } from "./TimeTableUncheckedCreateWithoutLectureInputSchema";
import { TimeTableWhereUniqueInputSchema } from "./TimeTableWhereUniqueInputSchema";

export const TimeTableCreateOrConnectWithoutLectureInputSchema: z.ZodType<Prisma.TimeTableCreateOrConnectWithoutLectureInput> =
  z
    .object({
      where: z.lazy(() => TimeTableWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TimeTableCreateWithoutLectureInputSchema),
        z.lazy(() => TimeTableUncheckedCreateWithoutLectureInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateOrConnectWithoutLectureInput>;

export default TimeTableCreateOrConnectWithoutLectureInputSchema;
