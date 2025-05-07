import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateManyLectureInputEnvelopeSchema } from "./TimeTableCreateManyLectureInputEnvelopeSchema";
import { TimeTableCreateOrConnectWithoutLectureInputSchema } from "./TimeTableCreateOrConnectWithoutLectureInputSchema";
import { TimeTableCreateWithoutLectureInputSchema } from "./TimeTableCreateWithoutLectureInputSchema";
import { TimeTableUncheckedCreateWithoutLectureInputSchema } from "./TimeTableUncheckedCreateWithoutLectureInputSchema";
import { TimeTableWhereUniqueInputSchema } from "./TimeTableWhereUniqueInputSchema";

export const TimeTableCreateNestedManyWithoutLectureInputSchema: z.ZodType<Prisma.TimeTableCreateNestedManyWithoutLectureInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TimeTableCreateWithoutLectureInputSchema),
          z.lazy(() => TimeTableCreateWithoutLectureInputSchema).array(),
          z.lazy(() => TimeTableUncheckedCreateWithoutLectureInputSchema),
          z
            .lazy(() => TimeTableUncheckedCreateWithoutLectureInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TimeTableCreateOrConnectWithoutLectureInputSchema),
          z
            .lazy(() => TimeTableCreateOrConnectWithoutLectureInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TimeTableCreateManyLectureInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TimeTableWhereUniqueInputSchema),
          z.lazy(() => TimeTableWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateNestedManyWithoutLectureInput>;

export default TimeTableCreateNestedManyWithoutLectureInputSchema;
