import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { DateTimeNullableFilterSchema } from "./DateTimeNullableFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";

export const VerificationWhereInputSchema: z.ZodType<Prisma.VerificationWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => VerificationWhereInputSchema),
          z.lazy(() => VerificationWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => VerificationWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => VerificationWhereInputSchema),
          z.lazy(() => VerificationWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      identifier: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      expiresAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      updatedAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
    })
    .strict() as z.ZodType<Prisma.VerificationWhereInput>;

export default VerificationWhereInputSchema;
