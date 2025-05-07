import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { LectureOrderByWithRelationInputSchema } from "./LectureOrderByWithRelationInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";
import { UserOrderByWithRelationInputSchema } from "./UserOrderByWithRelationInputSchema";

export const TimeTableOrderByWithRelationInputSchema: z.ZodType<Prisma.TimeTableOrderByWithRelationInput> =
  z
    .object({
      userId: z.lazy(() => SortOrderSchema).optional(),
      lectureId: z.lazy(() => SortOrderSchema).optional(),
      day: z.lazy(() => SortOrderSchema).optional(),
      periodNumber: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      lecture: z.lazy(() => LectureOrderByWithRelationInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.TimeTableOrderByWithRelationInput>;

export default TimeTableOrderByWithRelationInputSchema;
