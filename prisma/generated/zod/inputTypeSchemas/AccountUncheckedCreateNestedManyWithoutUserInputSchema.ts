import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountCreateManyUserInputEnvelopeSchema } from "./AccountCreateManyUserInputEnvelopeSchema";
import { AccountCreateOrConnectWithoutUserInputSchema } from "./AccountCreateOrConnectWithoutUserInputSchema";
import { AccountCreateWithoutUserInputSchema } from "./AccountCreateWithoutUserInputSchema";
import { AccountUncheckedCreateWithoutUserInputSchema } from "./AccountUncheckedCreateWithoutUserInputSchema";
import { AccountWhereUniqueInputSchema } from "./AccountWhereUniqueInputSchema";

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputSchema),
          z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput>;

export default AccountUncheckedCreateNestedManyWithoutUserInputSchema;
