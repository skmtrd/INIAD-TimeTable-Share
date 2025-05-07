import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/UserUncheckedUpdateManyInputSchema";
import { UserUpdateManyMutationInputSchema } from "../inputTypeSchemas/UserUpdateManyMutationInputSchema";
import { UserWhereInputSchema } from "../inputTypeSchemas/UserWhereInputSchema";

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        UserUpdateManyMutationInputSchema,
        UserUncheckedUpdateManyInputSchema,
      ]),
      where: UserWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict() as z.ZodType<Prisma.UserUpdateManyAndReturnArgs>;

export default UserUpdateManyAndReturnArgsSchema;
