import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

export default SessionIncludeSchema;
