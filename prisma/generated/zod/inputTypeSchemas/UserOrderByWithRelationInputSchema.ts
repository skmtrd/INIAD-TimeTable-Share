import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountOrderByRelationAggregateInputSchema } from "./AccountOrderByRelationAggregateInputSchema";
import { SessionOrderByRelationAggregateInputSchema } from "./SessionOrderByRelationAggregateInputSchema";
import { SortOrderInputSchema } from "./SortOrderInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";
import { TimeTableOrderByRelationAggregateInputSchema } from "./TimeTableOrderByRelationAggregateInputSchema";

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      image: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      twitterId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      privacyProtection: z.lazy(() => SortOrderSchema).optional(),
      sessions: z
        .lazy(() => SessionOrderByRelationAggregateInputSchema)
        .optional(),
      accounts: z
        .lazy(() => AccountOrderByRelationAggregateInputSchema)
        .optional(),
      timetables: z
        .lazy(() => TimeTableOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict() as z.ZodType<Prisma.UserOrderByWithRelationInput>;

export default UserOrderByWithRelationInputSchema;
