import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

export default AccountIncludeSchema;
