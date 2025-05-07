import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserIncludeSchema } from "../inputTypeSchemas/UserIncludeSchema";
import { UserSelectSchema } from "../inputTypeSchemas/UserSelectSchema";

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z
  .object({
    select: z.lazy(() => UserSelectSchema).optional(),
    include: z.lazy(() => UserIncludeSchema).optional(),
  })
  .strict();

export default UserArgsSchema;
