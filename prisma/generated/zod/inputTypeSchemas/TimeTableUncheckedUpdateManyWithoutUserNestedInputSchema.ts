import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateManyUserInputEnvelopeSchema } from "./TimeTableCreateManyUserInputEnvelopeSchema";
import { TimeTableCreateOrConnectWithoutUserInputSchema } from "./TimeTableCreateOrConnectWithoutUserInputSchema";
import { TimeTableCreateWithoutUserInputSchema } from "./TimeTableCreateWithoutUserInputSchema";
import { TimeTableScalarWhereInputSchema } from "./TimeTableScalarWhereInputSchema";
import { TimeTableUncheckedCreateWithoutUserInputSchema } from "./TimeTableUncheckedCreateWithoutUserInputSchema";
import { TimeTableUpdateManyWithWhereWithoutUserInputSchema } from "./TimeTableUpdateManyWithWhereWithoutUserInputSchema";
import { TimeTableUpdateWithWhereUniqueWithoutUserInputSchema } from "./TimeTableUpdateWithWhereUniqueWithoutUserInputSchema";
import { TimeTableUpsertWithWhereUniqueWithoutUserInputSchema } from "./TimeTableUpsertWithWhereUniqueWithoutUserInputSchema";
import { TimeTableWhereUniqueInputSchema } from "./TimeTableWhereUniqueInputSchema";

export const TimeTableUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TimeTableUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TimeTableCreateWithoutUserInputSchema),
          z.lazy(() => TimeTableCreateWithoutUserInputSchema).array(),
          z.lazy(() => TimeTableUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => TimeTableUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TimeTableCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => TimeTableCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => TimeTableUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => TimeTableUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TimeTableCreateManyUserInputEnvelopeSchema)
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
          z.lazy(() => TimeTableUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => TimeTableUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TimeTableUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => TimeTableUpdateManyWithWhereWithoutUserInputSchema)
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
    .strict() as z.ZodType<Prisma.TimeTableUncheckedUpdateManyWithoutUserNestedInput>;

export default TimeTableUncheckedUpdateManyWithoutUserNestedInputSchema;
