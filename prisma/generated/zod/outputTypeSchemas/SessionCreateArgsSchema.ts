import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { SessionCreateInputSchema } from "../inputTypeSchemas/SessionCreateInputSchema";
import { SessionIncludeSchema } from "../inputTypeSchemas/SessionIncludeSchema";
import { SessionUncheckedCreateInputSchema } from "../inputTypeSchemas/SessionUncheckedCreateInputSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z
  .object({
    id: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    token: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: z.lazy(() => SessionIncludeSchema).optional(),
    data: z.union([
      SessionCreateInputSchema,
      SessionUncheckedCreateInputSchema,
    ]),
  })
  .strict() as z.ZodType<Prisma.SessionCreateArgs>;

export default SessionCreateArgsSchema;
