import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureIncludeSchema } from "../inputTypeSchemas/LectureIncludeSchema";
import { LectureUncheckedUpdateInputSchema } from "../inputTypeSchemas/LectureUncheckedUpdateInputSchema";
import { LectureUpdateInputSchema } from "../inputTypeSchemas/LectureUpdateInputSchema";
import { LectureWhereUniqueInputSchema } from "../inputTypeSchemas/LectureWhereUniqueInputSchema";
import { LectureCountOutputTypeArgsSchema } from "../outputTypeSchemas/LectureCountOutputTypeArgsSchema";
import { TimeTableFindManyArgsSchema } from "../outputTypeSchemas/TimeTableFindManyArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LectureSelectSchema: z.ZodType<Prisma.LectureSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    timetables: z
      .union([z.boolean(), z.lazy(() => TimeTableFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => LectureCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const LectureUpdateArgsSchema: z.ZodType<Prisma.LectureUpdateArgs> = z
  .object({
    select: LectureSelectSchema.optional(),
    include: z.lazy(() => LectureIncludeSchema).optional(),
    data: z.union([
      LectureUpdateInputSchema,
      LectureUncheckedUpdateInputSchema,
    ]),
    where: LectureWhereUniqueInputSchema,
  })
  .strict() as z.ZodType<Prisma.LectureUpdateArgs>;

export default LectureUpdateArgsSchema;
