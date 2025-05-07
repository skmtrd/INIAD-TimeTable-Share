import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { SessionIncludeSchema } from "../inputTypeSchemas/SessionIncludeSchema";
import { SessionSelectSchema } from "../inputTypeSchemas/SessionSelectSchema";

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z
  .object({
    select: z.lazy(() => SessionSelectSchema).optional(),
    include: z.lazy(() => SessionIncludeSchema).optional(),
  })
  .strict();

export default SessionArgsSchema;
