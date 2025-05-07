import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { LectureCreateOrConnectWithoutTimetablesInputSchema } from "./LectureCreateOrConnectWithoutTimetablesInputSchema";
import { LectureCreateWithoutTimetablesInputSchema } from "./LectureCreateWithoutTimetablesInputSchema";
import { LectureUncheckedCreateWithoutTimetablesInputSchema } from "./LectureUncheckedCreateWithoutTimetablesInputSchema";
import { LectureWhereUniqueInputSchema } from "./LectureWhereUniqueInputSchema";

export const LectureCreateNestedOneWithoutTimetablesInputSchema: z.ZodType<Prisma.LectureCreateNestedOneWithoutTimetablesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LectureCreateWithoutTimetablesInputSchema),
          z.lazy(() => LectureUncheckedCreateWithoutTimetablesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LectureCreateOrConnectWithoutTimetablesInputSchema)
        .optional(),
      connect: z.lazy(() => LectureWhereUniqueInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.LectureCreateNestedOneWithoutTimetablesInput>;

export default LectureCreateNestedOneWithoutTimetablesInputSchema;
