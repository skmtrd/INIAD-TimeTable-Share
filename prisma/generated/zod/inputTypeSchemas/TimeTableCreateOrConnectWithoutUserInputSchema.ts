import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateWithoutUserInputSchema } from "./TimeTableCreateWithoutUserInputSchema";
import { TimeTableUncheckedCreateWithoutUserInputSchema } from "./TimeTableUncheckedCreateWithoutUserInputSchema";
import { TimeTableWhereUniqueInputSchema } from "./TimeTableWhereUniqueInputSchema";

export const TimeTableCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TimeTableCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => TimeTableWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TimeTableCreateWithoutUserInputSchema),
        z.lazy(() => TimeTableUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateOrConnectWithoutUserInput>;

export default TimeTableCreateOrConnectWithoutUserInputSchema;
