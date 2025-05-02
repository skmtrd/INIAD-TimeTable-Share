import { userSchema } from "@/schema";
import type { FrourioSpec } from "@frourio/next";
import { z } from "zod";

export const frourioSpec = {
  param: z.string(),
  get: {
    res: {
      200: { body: userSchema },
      401: { body: z.object({ error: z.string() }) },
      404: { body: z.object({ error: z.string() }) },
    },
  },
  put: {
    body: z.object({
      name: z.string(),
      twitterId: z.string().nullable(),
      image: z.string().nullable(),
    }),
    res: {
      200: { body: userSchema },
      401: { body: z.object({ error: z.string() }) },
      403: { body: z.object({ error: z.string() }) },
      404: { body: z.object({ error: z.string() }) },
    },
  },
} satisfies FrourioSpec;
