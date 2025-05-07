import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserCreateManyInputSchema } from "../inputTypeSchemas/UserCreateManyInputSchema";

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        UserCreateManyInputSchema,
        UserCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.UserCreateManyAndReturnArgs>;

export default UserCreateManyAndReturnArgsSchema;
