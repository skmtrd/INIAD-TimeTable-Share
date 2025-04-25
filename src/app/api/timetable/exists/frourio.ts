import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';

export const frourioSpec = {
  get: {
    res: { 
      200: { body: z.object({ isExists: z.boolean() }) },
      401: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    }
  },
} satisfies FrourioSpec;
