import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SessionScalarWhereInputSchema } from "./SessionScalarWhereInputSchema";
import { SessionUncheckedUpdateManyWithoutUserInputSchema } from "./SessionUncheckedUpdateManyWithoutUserInputSchema";
import { SessionUpdateManyMutationInputSchema } from "./SessionUpdateManyMutationInputSchema";

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => SessionUpdateManyMutationInputSchema),
        z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict() as z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput>;

export default SessionUpdateManyWithWhereWithoutUserInputSchema;
