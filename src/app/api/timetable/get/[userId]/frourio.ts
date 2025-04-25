import { TimeTableSchema } from '@/schema/timetable';
import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';






export const frourioSpec = {
  param: z.string(),
  get: {
    res: { 
      200: { body: TimeTableSchema } ,
      500: { body: z.object({ message: z.string() }) }
     }
  },
} satisfies FrourioSpec;
