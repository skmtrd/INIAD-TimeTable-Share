import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountCreateManyUserInputEnvelopeSchema } from "./AccountCreateManyUserInputEnvelopeSchema";
import { AccountCreateOrConnectWithoutUserInputSchema } from "./AccountCreateOrConnectWithoutUserInputSchema";
import { AccountCreateWithoutUserInputSchema } from "./AccountCreateWithoutUserInputSchema";
import { AccountScalarWhereInputSchema } from "./AccountScalarWhereInputSchema";
import { AccountUncheckedCreateWithoutUserInputSchema } from "./AccountUncheckedCreateWithoutUserInputSchema";
import { AccountUpdateManyWithWhereWithoutUserInputSchema } from "./AccountUpdateManyWithWhereWithoutUserInputSchema";
import { AccountUpdateWithWhereUniqueWithoutUserInputSchema } from "./AccountUpdateWithWhereUniqueWithoutUserInputSchema";
import { AccountUpsertWithWhereUniqueWithoutUserInputSchema } from "./AccountUpsertWithWhereUniqueWithoutUserInputSchema";
import { AccountWhereUniqueInputSchema } from "./AccountWhereUniqueInputSchema";

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput>;

export default AccountUpdateManyWithoutUserNestedInputSchema;
