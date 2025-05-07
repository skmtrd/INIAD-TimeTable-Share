import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { SessionIncludeSchema } from "../inputTypeSchemas/SessionIncludeSchema";
import { SessionWhereUniqueInputSchema } from "../inputTypeSchemas/SessionWhereUniqueInputSchema";
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

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: z.lazy(() => SessionIncludeSchema).optional(),
    where: SessionWhereUniqueInputSchema,
  })
  .strict() as z.ZodType<Prisma.SessionDeleteArgs>;

export default SessionDeleteArgsSchema;
