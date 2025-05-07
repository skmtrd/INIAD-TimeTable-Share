import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserWhereInputSchema } from "../inputTypeSchemas/UserWhereInputSchema";

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict() as z.ZodType<Prisma.UserDeleteManyArgs>;

export default UserDeleteManyArgsSchema;
