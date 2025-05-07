import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      providerId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accessToken: z.lazy(() => SortOrderSchema).optional(),
      refreshToken: z.lazy(() => SortOrderSchema).optional(),
      idToken: z.lazy(() => SortOrderSchema).optional(),
      accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
      refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
      scope: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.AccountMinOrderByAggregateInput>;

export default AccountMinOrderByAggregateInputSchema;
