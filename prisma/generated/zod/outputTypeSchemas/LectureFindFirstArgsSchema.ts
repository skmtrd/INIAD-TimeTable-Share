import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureIncludeSchema } from "../inputTypeSchemas/LectureIncludeSchema";
import { LectureOrderByWithRelationInputSchema } from "../inputTypeSchemas/LectureOrderByWithRelationInputSchema";
import { LectureScalarFieldEnumSchema } from "../inputTypeSchemas/LectureScalarFieldEnumSchema";
import { LectureWhereInputSchema } from "../inputTypeSchemas/LectureWhereInputSchema";
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

export const LectureFindFirstArgsSchema: z.ZodType<Prisma.LectureFindFirstArgs> =
  z
    .object({
      select: LectureSelectSchema.optional(),
      include: z.lazy(() => LectureIncludeSchema).optional(),
      where: LectureWhereInputSchema.optional(),
      orderBy: z
        .union([
          LectureOrderByWithRelationInputSchema.array(),
          LectureOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LectureWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          LectureScalarFieldEnumSchema,
          LectureScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.LectureFindFirstArgs>;

export default LectureFindFirstArgsSchema;
