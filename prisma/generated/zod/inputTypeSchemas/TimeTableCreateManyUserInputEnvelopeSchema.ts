import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { TimeTableCreateManyUserInputSchema } from "./TimeTableCreateManyUserInputSchema";

export const TimeTableCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TimeTableCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TimeTableCreateManyUserInputSchema),
        z.lazy(() => TimeTableCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateManyUserInputEnvelope>;

export default TimeTableCreateManyUserInputEnvelopeSchema;
