import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> =
  z
    .object({
      id: z.string(),
      expiresAt: z.coerce.date(),
      token: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      ipAddress: z.string().optional().nullable(),
      userAgent: z.string().optional().nullable(),
    })
    .strict() as z.ZodType<Prisma.SessionCreateManyUserInput>;

export default SessionCreateManyUserInputSchema;
