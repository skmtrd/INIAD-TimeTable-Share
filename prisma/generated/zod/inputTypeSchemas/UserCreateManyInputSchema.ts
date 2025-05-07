import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      emailVerified: z.boolean(),
      image: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      twitterId: z.string().optional().nullable(),
      privacyProtection: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.UserCreateManyInput>;

export default UserCreateManyInputSchema;
