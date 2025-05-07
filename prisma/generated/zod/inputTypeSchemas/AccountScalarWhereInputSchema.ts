import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { DateTimeNullableFilterSchema } from "./DateTimeNullableFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AccountScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      accountId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      providerId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      accessToken: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      refreshToken: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      idToken: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      accessTokenExpiresAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      refreshTokenExpiresAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      scope: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      password: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.AccountScalarWhereInput>;

export default AccountScalarWhereInputSchema;
