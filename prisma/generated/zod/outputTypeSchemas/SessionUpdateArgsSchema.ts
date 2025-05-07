import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { SessionIncludeSchema } from "../inputTypeSchemas/SessionIncludeSchema";
import { SessionUncheckedUpdateInputSchema } from "../inputTypeSchemas/SessionUncheckedUpdateInputSchema";
import { SessionUpdateInputSchema } from "../inputTypeSchemas/SessionUpdateInputSchema";
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

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: z.lazy(() => SessionIncludeSchema).optional(),
    data: z.union([
      SessionUpdateInputSchema,
      SessionUncheckedUpdateInputSchema,
    ]),
    where: SessionWhereUniqueInputSchema,
  })
  .strict() as z.ZodType<Prisma.SessionUpdateArgs>;

export default SessionUpdateArgsSchema;
