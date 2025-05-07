import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureCreateManyInputSchema } from "../inputTypeSchemas/LectureCreateManyInputSchema";

export const LectureCreateManyArgsSchema: z.ZodType<Prisma.LectureCreateManyArgs> =
  z
    .object({
      data: z.union([
        LectureCreateManyInputSchema,
        LectureCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.LectureCreateManyArgs>;

export default LectureCreateManyArgsSchema;
