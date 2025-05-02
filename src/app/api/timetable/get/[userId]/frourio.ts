import { timetableSchema } from '@/schema';
import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';

export const frourioSpec = {
  param: z.string(),
  get: {
    res: { 
      200: { body: timetableSchema } ,
      401: { body: z.object({ error: z.string() }) },
      500: { body: z.object({ message: z.string() }) }
     }
  },
} satisfies FrourioSpec;
