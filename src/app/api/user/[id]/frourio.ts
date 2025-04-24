import { userSchema } from "@/schema";
import type { FrourioSpec } from "@frourio/next";
import { z } from "zod";

export const frourioSpec = {
  param: z.string(),
  get: {
    res: {
      200: { body: userSchema },
      404: { body: z.object({ error: z.string() }) },
    },
  },
} satisfies FrourioSpec;
