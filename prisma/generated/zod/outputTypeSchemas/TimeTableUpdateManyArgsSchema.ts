import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { TimeTableUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/TimeTableUncheckedUpdateManyInputSchema";
import { TimeTableUpdateManyMutationInputSchema } from "../inputTypeSchemas/TimeTableUpdateManyMutationInputSchema";
import { TimeTableWhereInputSchema } from "../inputTypeSchemas/TimeTableWhereInputSchema";

export const TimeTableUpdateManyArgsSchema: z.ZodType<Prisma.TimeTableUpdateManyArgs> =
  z
    .object({
      data: z.union([
        TimeTableUpdateManyMutationInputSchema,
        TimeTableUncheckedUpdateManyInputSchema,
      ]),
      where: TimeTableWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableUpdateManyArgs>;

export default TimeTableUpdateManyArgsSchema;
