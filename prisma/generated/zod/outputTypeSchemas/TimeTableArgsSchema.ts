import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { TimeTableIncludeSchema } from "../inputTypeSchemas/TimeTableIncludeSchema";
import { TimeTableSelectSchema } from "../inputTypeSchemas/TimeTableSelectSchema";

export const TimeTableArgsSchema: z.ZodType<Prisma.TimeTableDefaultArgs> = z
  .object({
    select: z.lazy(() => TimeTableSelectSchema).optional(),
    include: z.lazy(() => TimeTableIncludeSchema).optional(),
  })
  .strict();

export default TimeTableArgsSchema;
