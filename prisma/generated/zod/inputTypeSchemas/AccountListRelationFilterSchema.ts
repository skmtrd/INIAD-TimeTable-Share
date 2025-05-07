import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountWhereInputSchema } from "./AccountWhereInputSchema";

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> =
  z
    .object({
      every: z.lazy(() => AccountWhereInputSchema).optional(),
      some: z.lazy(() => AccountWhereInputSchema).optional(),
      none: z.lazy(() => AccountWhereInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.AccountListRelationFilter>;

export default AccountListRelationFilterSchema;
