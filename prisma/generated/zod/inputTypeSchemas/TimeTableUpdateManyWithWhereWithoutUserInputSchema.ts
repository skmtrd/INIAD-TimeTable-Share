import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableScalarWhereInputSchema } from "./TimeTableScalarWhereInputSchema";
import { TimeTableUncheckedUpdateManyWithoutUserInputSchema } from "./TimeTableUncheckedUpdateManyWithoutUserInputSchema";
import { TimeTableUpdateManyMutationInputSchema } from "./TimeTableUpdateManyMutationInputSchema";

export const TimeTableUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TimeTableUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => TimeTableScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => TimeTableUpdateManyMutationInputSchema),
        z.lazy(() => TimeTableUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.TimeTableUpdateManyWithWhereWithoutUserInput>;

export default TimeTableUpdateManyWithWhereWithoutUserInputSchema;
