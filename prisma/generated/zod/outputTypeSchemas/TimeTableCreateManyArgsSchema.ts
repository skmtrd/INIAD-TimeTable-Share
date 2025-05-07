import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { TimeTableCreateManyInputSchema } from "../inputTypeSchemas/TimeTableCreateManyInputSchema";

export const TimeTableCreateManyArgsSchema: z.ZodType<Prisma.TimeTableCreateManyArgs> =
  z
    .object({
      data: z.union([
        TimeTableCreateManyInputSchema,
        TimeTableCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableCreateManyArgs>;

export default TimeTableCreateManyArgsSchema;
