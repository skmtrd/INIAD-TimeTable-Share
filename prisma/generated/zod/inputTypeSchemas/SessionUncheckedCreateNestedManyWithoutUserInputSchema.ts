import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SessionCreateManyUserInputEnvelopeSchema } from "./SessionCreateManyUserInputEnvelopeSchema";
import { SessionCreateOrConnectWithoutUserInputSchema } from "./SessionCreateOrConnectWithoutUserInputSchema";
import { SessionCreateWithoutUserInputSchema } from "./SessionCreateWithoutUserInputSchema";
import { SessionUncheckedCreateWithoutUserInputSchema } from "./SessionUncheckedCreateWithoutUserInputSchema";
import { SessionWhereUniqueInputSchema } from "./SessionWhereUniqueInputSchema";

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput>;

export default SessionUncheckedCreateNestedManyWithoutUserInputSchema;
