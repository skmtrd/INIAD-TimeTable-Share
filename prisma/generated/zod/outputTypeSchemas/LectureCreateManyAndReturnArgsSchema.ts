import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureCreateManyInputSchema } from "../inputTypeSchemas/LectureCreateManyInputSchema";

export const LectureCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LectureCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        LectureCreateManyInputSchema,
        LectureCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.LectureCreateManyAndReturnArgs>;

export default LectureCreateManyAndReturnArgsSchema;
