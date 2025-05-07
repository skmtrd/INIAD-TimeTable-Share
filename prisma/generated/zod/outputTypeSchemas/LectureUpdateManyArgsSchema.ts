import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/LectureUncheckedUpdateManyInputSchema";
import { LectureUpdateManyMutationInputSchema } from "../inputTypeSchemas/LectureUpdateManyMutationInputSchema";
import { LectureWhereInputSchema } from "../inputTypeSchemas/LectureWhereInputSchema";

export const LectureUpdateManyArgsSchema: z.ZodType<Prisma.LectureUpdateManyArgs> =
  z
    .object({
      data: z.union([
        LectureUpdateManyMutationInputSchema,
        LectureUncheckedUpdateManyInputSchema,
      ]),
      where: LectureWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.LectureUpdateManyArgs>;

export default LectureUpdateManyArgsSchema;
