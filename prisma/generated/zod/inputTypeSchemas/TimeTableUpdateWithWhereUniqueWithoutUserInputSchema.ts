import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableUncheckedUpdateWithoutUserInputSchema } from "./TimeTableUncheckedUpdateWithoutUserInputSchema";
import { TimeTableUpdateWithoutUserInputSchema } from "./TimeTableUpdateWithoutUserInputSchema";
import { TimeTableWhereUniqueInputSchema } from "./TimeTableWhereUniqueInputSchema";

export const TimeTableUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TimeTableUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => TimeTableWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => TimeTableUpdateWithoutUserInputSchema),
        z.lazy(() => TimeTableUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.TimeTableUpdateWithWhereUniqueWithoutUserInput>;

export default TimeTableUpdateWithWhereUniqueWithoutUserInputSchema;
