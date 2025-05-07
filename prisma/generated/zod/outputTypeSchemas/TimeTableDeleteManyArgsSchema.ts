import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { TimeTableWhereInputSchema } from "../inputTypeSchemas/TimeTableWhereInputSchema";

export const TimeTableDeleteManyArgsSchema: z.ZodType<Prisma.TimeTableDeleteManyArgs> =
  z
    .object({
      where: TimeTableWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableDeleteManyArgs>;

export default TimeTableDeleteManyArgsSchema;
