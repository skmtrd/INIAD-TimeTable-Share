import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountListRelationFilterSchema } from "./AccountListRelationFilterSchema";
import { BoolFilterSchema } from "./BoolFilterSchema";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { SessionListRelationFilterSchema } from "./SessionListRelationFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";
import { TimeTableListRelationFilterSchema } from "./TimeTableListRelationFilterSchema";

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    emailVerified: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    image: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    twitterId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    privacyProtection: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
    accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
    timetables: z.lazy(() => TimeTableListRelationFilterSchema).optional(),
  })
  .strict() as z.ZodType<Prisma.UserWhereInput>;

export default UserWhereInputSchema;
