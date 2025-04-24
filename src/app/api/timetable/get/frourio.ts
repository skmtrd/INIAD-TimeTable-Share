import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';

export const frourioSpec = {
  get: {
    res: { 200: { body: z.object({}) } },
  },
} satisfies FrourioSpec;
