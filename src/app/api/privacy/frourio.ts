import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';

export const frourioSpec = {
  put: {
    body: z.object({
      privacyProtection: z.boolean(),
    }),
    res: {
      200: { body: z.object({ message: z.string() }) },
      401: { body: z.object({ error: z.string() }) },
      404: { body: z.object({ error: z.string() }) },
    },
  },
} satisfies FrourioSpec;
