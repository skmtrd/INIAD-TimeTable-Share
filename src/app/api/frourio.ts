import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';

export const frourioSpec = {
  get: {
    res: { 200: { body: z.object({ value: z.string(), id: z.string() }) } },
  },
} satisfies FrourioSpec;
