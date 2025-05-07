import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureCreateInputSchema } from "../inputTypeSchemas/LectureCreateInputSchema";
import { LectureIncludeSchema } from "../inputTypeSchemas/LectureIncludeSchema";
import { LectureUncheckedCreateInputSchema } from "../inputTypeSchemas/LectureUncheckedCreateInputSchema";
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

export const LectureUpsertArgsSchema: z.ZodType<Prisma.LectureUpsertArgs> = z
  .object({
    select: LectureSelectSchema.optional(),
    include: z.lazy(() => LectureIncludeSchema).optional(),
    where: LectureWhereUniqueInputSchema,
    create: z.union([
      LectureCreateInputSchema,
      LectureUncheckedCreateInputSchema,
    ]),
    update: z.union([
      LectureUpdateInputSchema,
      LectureUncheckedUpdateInputSchema,
    ]),
  })
  .strict() as z.ZodType<Prisma.LectureUpsertArgs>;

export default LectureUpsertArgsSchema;
