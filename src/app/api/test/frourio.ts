import type { FrourioSpec } from "@frourio/next";
import { z } from "zod";

export const frourioSpec = {
  get: {
    res: {
      200: {
        body: z.object({ value: z.string() }),
      },
      404: {
        body: z.object({ error: z.string() }),
      },
    },
  },
  post: {
    body: z.object({ id: z.string() }),
    res: {
      200: {
        body: z.object({ value: z.string() }),
      },
      404: {
        body: z.object({ error: z.string() }),
      },
    },
  },
} satisfies FrourioSpec;
