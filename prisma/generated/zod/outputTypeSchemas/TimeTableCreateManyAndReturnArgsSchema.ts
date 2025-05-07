import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { TimeTableCreateManyInputSchema } from "../inputTypeSchemas/TimeTableCreateManyInputSchema";

export const TimeTableCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TimeTableCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        TimeTableCreateManyInputSchema,
        TimeTableCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateManyAndReturnArgs>;

export default TimeTableCreateManyAndReturnArgsSchema;
