import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateWithoutUserInputSchema } from "./TimeTableCreateWithoutUserInputSchema";
import { TimeTableUncheckedCreateWithoutUserInputSchema } from "./TimeTableUncheckedCreateWithoutUserInputSchema";
import { TimeTableUncheckedUpdateWithoutUserInputSchema } from "./TimeTableUncheckedUpdateWithoutUserInputSchema";
import { TimeTableUpdateWithoutUserInputSchema } from "./TimeTableUpdateWithoutUserInputSchema";
import { TimeTableWhereUniqueInputSchema } from "./TimeTableWhereUniqueInputSchema";

export const TimeTableUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TimeTableUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => TimeTableWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => TimeTableUpdateWithoutUserInputSchema),
        z.lazy(() => TimeTableUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => TimeTableCreateWithoutUserInputSchema),
        z.lazy(() => TimeTableUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.TimeTableUpsertWithWhereUniqueWithoutUserInput>;

export default TimeTableUpsertWithWhereUniqueWithoutUserInputSchema;
