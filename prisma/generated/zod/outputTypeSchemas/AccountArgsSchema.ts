import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { AccountIncludeSchema } from "../inputTypeSchemas/AccountIncludeSchema";
import { AccountSelectSchema } from "../inputTypeSchemas/AccountSelectSchema";

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z
  .object({
    select: z.lazy(() => AccountSelectSchema).optional(),
    include: z.lazy(() => AccountIncludeSchema).optional(),
  })
  .strict();

export default AccountArgsSchema;
