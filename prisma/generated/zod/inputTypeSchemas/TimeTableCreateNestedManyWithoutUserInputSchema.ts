import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateManyUserInputEnvelopeSchema } from "./TimeTableCreateManyUserInputEnvelopeSchema";
import { TimeTableCreateOrConnectWithoutUserInputSchema } from "./TimeTableCreateOrConnectWithoutUserInputSchema";
import { TimeTableCreateWithoutUserInputSchema } from "./TimeTableCreateWithoutUserInputSchema";
import { TimeTableUncheckedCreateWithoutUserInputSchema } from "./TimeTableUncheckedCreateWithoutUserInputSchema";
import { TimeTableWhereUniqueInputSchema } from "./TimeTableWhereUniqueInputSchema";

export const TimeTableCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TimeTableCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => TimeTableCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TimeTableWhereUniqueInputSchema),
          z.lazy(() => TimeTableWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateNestedManyWithoutUserInput>;

export default TimeTableCreateNestedManyWithoutUserInputSchema;
