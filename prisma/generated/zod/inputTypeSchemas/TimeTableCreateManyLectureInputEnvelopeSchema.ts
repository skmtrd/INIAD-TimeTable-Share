import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateManyLectureInputSchema } from "./TimeTableCreateManyLectureInputSchema";

export const TimeTableCreateManyLectureInputEnvelopeSchema: z.ZodType<Prisma.TimeTableCreateManyLectureInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TimeTableCreateManyLectureInputSchema),
        z.lazy(() => TimeTableCreateManyLectureInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateManyLectureInputEnvelope>;

export default TimeTableCreateManyLectureInputEnvelopeSchema;
