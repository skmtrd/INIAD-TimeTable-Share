import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateManyLectureInputEnvelopeSchema } from "./TimeTableCreateManyLectureInputEnvelopeSchema";
import { TimeTableCreateOrConnectWithoutLectureInputSchema } from "./TimeTableCreateOrConnectWithoutLectureInputSchema";
import { TimeTableCreateWithoutLectureInputSchema } from "./TimeTableCreateWithoutLectureInputSchema";
import { TimeTableScalarWhereInputSchema } from "./TimeTableScalarWhereInputSchema";
import { TimeTableUncheckedCreateWithoutLectureInputSchema } from "./TimeTableUncheckedCreateWithoutLectureInputSchema";
import { TimeTableUpdateManyWithWhereWithoutLectureInputSchema } from "./TimeTableUpdateManyWithWhereWithoutLectureInputSchema";
import { TimeTableUpdateWithWhereUniqueWithoutLectureInputSchema } from "./TimeTableUpdateWithWhereUniqueWithoutLectureInputSchema";
import { TimeTableUpsertWithWhereUniqueWithoutLectureInputSchema } from "./TimeTableUpsertWithWhereUniqueWithoutLectureInputSchema";
import { TimeTableWhereUniqueInputSchema } from "./TimeTableWhereUniqueInputSchema";

export const TimeTableUncheckedUpdateManyWithoutLectureNestedInputSchema: z.ZodType<Prisma.TimeTableUncheckedUpdateManyWithoutLectureNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => TimeTableUpsertWithWhereUniqueWithoutLectureInputSchema),
          z
            .lazy(() => TimeTableUpsertWithWhereUniqueWithoutLectureInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TimeTableCreateManyLectureInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TimeTableWhereUniqueInputSchema),
          z.lazy(() => TimeTableWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TimeTableWhereUniqueInputSchema),
          z.lazy(() => TimeTableWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TimeTableWhereUniqueInputSchema),
          z.lazy(() => TimeTableWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TimeTableWhereUniqueInputSchema),
          z.lazy(() => TimeTableWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => TimeTableUpdateWithWhereUniqueWithoutLectureInputSchema),
          z
            .lazy(() => TimeTableUpdateWithWhereUniqueWithoutLectureInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TimeTableUpdateManyWithWhereWithoutLectureInputSchema),
          z
            .lazy(() => TimeTableUpdateManyWithWhereWithoutLectureInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TimeTableScalarWhereInputSchema),
          z.lazy(() => TimeTableScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableUncheckedUpdateManyWithoutLectureNestedInput>;

export default TimeTableUncheckedUpdateManyWithoutLectureNestedInputSchema;
