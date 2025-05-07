import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { LectureCreateWithoutTimetablesInputSchema } from "./LectureCreateWithoutTimetablesInputSchema";
import { LectureUncheckedCreateWithoutTimetablesInputSchema } from "./LectureUncheckedCreateWithoutTimetablesInputSchema";
import { LectureWhereUniqueInputSchema } from "./LectureWhereUniqueInputSchema";

export const LectureCreateOrConnectWithoutTimetablesInputSchema: z.ZodType<Prisma.LectureCreateOrConnectWithoutTimetablesInput> =
  z
    .object({
      where: z.lazy(() => LectureWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LectureCreateWithoutTimetablesInputSchema),
        z.lazy(() => LectureUncheckedCreateWithoutTimetablesInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.LectureCreateOrConnectWithoutTimetablesInput>;

export default LectureCreateOrConnectWithoutTimetablesInputSchema;
