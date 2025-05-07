import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional().nullable(),
    })
    .strict() as z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput>;

export default NullableStringFieldUpdateOperationsInputSchema;
