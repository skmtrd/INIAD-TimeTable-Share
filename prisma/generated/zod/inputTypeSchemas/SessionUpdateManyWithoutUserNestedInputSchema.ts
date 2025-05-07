import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SessionCreateManyUserInputEnvelopeSchema } from "./SessionCreateManyUserInputEnvelopeSchema";
import { SessionCreateOrConnectWithoutUserInputSchema } from "./SessionCreateOrConnectWithoutUserInputSchema";
import { SessionCreateWithoutUserInputSchema } from "./SessionCreateWithoutUserInputSchema";
import { SessionScalarWhereInputSchema } from "./SessionScalarWhereInputSchema";
import { SessionUncheckedCreateWithoutUserInputSchema } from "./SessionUncheckedCreateWithoutUserInputSchema";
import { SessionUpdateManyWithWhereWithoutUserInputSchema } from "./SessionUpdateManyWithWhereWithoutUserInputSchema";
import { SessionUpdateWithWhereUniqueWithoutUserInputSchema } from "./SessionUpdateWithWhereUniqueWithoutUserInputSchema";
import { SessionUpsertWithWhereUniqueWithoutUserInputSchema } from "./SessionUpsertWithWhereUniqueWithoutUserInputSchema";
import { SessionWhereUniqueInputSchema } from "./SessionWhereUniqueInputSchema";

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SessionScalarWhereInputSchema),
          z.lazy(() => SessionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput>;

export default SessionUpdateManyWithoutUserNestedInputSchema;
