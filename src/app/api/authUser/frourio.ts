import type { FrourioSpec } from "@frourio/next";
import { userSchema } from "@/schema";
import { z } from "zod";

export const frourioSpec = {
  get: {
    res: {
      200: { body: userSchema },
      401: { body: z.object({ error: z.string() }) },
    },
  },
} satisfies FrourioSpec;
