import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderInputSchema } from "./SortOrderInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";
import { UserOrderByWithRelationInputSchema } from "./UserOrderByWithRelationInputSchema";

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      userAgent: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.SessionOrderByWithRelationInput>;

export default SessionOrderByWithRelationInputSchema;
