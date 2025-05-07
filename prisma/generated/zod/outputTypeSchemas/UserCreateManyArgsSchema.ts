import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserCreateManyInputSchema } from "../inputTypeSchemas/UserCreateManyInputSchema";

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z
  .object({
    data: z.union([
      UserCreateManyInputSchema,
      UserCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict() as z.ZodType<Prisma.UserCreateManyArgs>;

export default UserCreateManyArgsSchema;
