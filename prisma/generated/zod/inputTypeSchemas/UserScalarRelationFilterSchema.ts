import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => UserWhereInputSchema).optional(),
      isNot: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict() as z.ZodType<Prisma.UserScalarRelationFilter>;

export default UserScalarRelationFilterSchema;
