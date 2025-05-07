import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableScalarWhereInputSchema } from "./TimeTableScalarWhereInputSchema";
import { TimeTableUncheckedUpdateManyWithoutLectureInputSchema } from "./TimeTableUncheckedUpdateManyWithoutLectureInputSchema";
import { TimeTableUpdateManyMutationInputSchema } from "./TimeTableUpdateManyMutationInputSchema";

export const TimeTableUpdateManyWithWhereWithoutLectureInputSchema: z.ZodType<Prisma.TimeTableUpdateManyWithWhereWithoutLectureInput> =
  z
    .object({
      where: z.lazy(() => TimeTableScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => TimeTableUpdateManyMutationInputSchema),
        z.lazy(() => TimeTableUncheckedUpdateManyWithoutLectureInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.TimeTableUpdateManyWithWhereWithoutLectureInput>;

export default TimeTableUpdateManyWithWhereWithoutLectureInputSchema;
