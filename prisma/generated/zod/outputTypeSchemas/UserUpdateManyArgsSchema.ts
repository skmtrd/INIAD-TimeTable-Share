import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { UserUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/UserUncheckedUpdateManyInputSchema";
import { UserUpdateManyMutationInputSchema } from "../inputTypeSchemas/UserUpdateManyMutationInputSchema";
import { UserWhereInputSchema } from "../inputTypeSchemas/UserWhereInputSchema";

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z
  .object({
    data: z.union([
      UserUpdateManyMutationInputSchema,
      UserUncheckedUpdateManyInputSchema,
    ]),
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict() as z.ZodType<Prisma.UserUpdateManyArgs>;

export default UserUpdateManyArgsSchema;
