import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { TimeTableCreateInputSchema } from "../inputTypeSchemas/TimeTableCreateInputSchema";
import { TimeTableIncludeSchema } from "../inputTypeSchemas/TimeTableIncludeSchema";
import { TimeTableUncheckedCreateInputSchema } from "../inputTypeSchemas/TimeTableUncheckedCreateInputSchema";
import { TimeTableUncheckedUpdateInputSchema } from "../inputTypeSchemas/TimeTableUncheckedUpdateInputSchema";
import { TimeTableUpdateInputSchema } from "../inputTypeSchemas/TimeTableUpdateInputSchema";
import { TimeTableWhereUniqueInputSchema } from "../inputTypeSchemas/TimeTableWhereUniqueInputSchema";
import { LectureArgsSchema } from "../outputTypeSchemas/LectureArgsSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TimeTableSelectSchema: z.ZodType<Prisma.TimeTableSelect> = z
  .object({
    userId: z.boolean().optional(),
    lectureId: z.boolean().optional(),
    day: z.boolean().optional(),
    periodNumber: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    lecture: z.union([z.boolean(), z.lazy(() => LectureArgsSchema)]).optional(),
  })
  .strict();

export const TimeTableUpsertArgsSchema: z.ZodType<Prisma.TimeTableUpsertArgs> =
  z
    .object({
      select: TimeTableSelectSchema.optional(),
      include: z.lazy(() => TimeTableIncludeSchema).optional(),
      where: TimeTableWhereUniqueInputSchema,
      create: z.union([
        TimeTableCreateInputSchema,
        TimeTableUncheckedCreateInputSchema,
      ]),
      update: z.union([
        TimeTableUpdateInputSchema,
        TimeTableUncheckedUpdateInputSchema,
      ]),
    })
    .strict() as z.ZodType<Prisma.TimeTableUpsertArgs>;

export default TimeTableUpsertArgsSchema;
