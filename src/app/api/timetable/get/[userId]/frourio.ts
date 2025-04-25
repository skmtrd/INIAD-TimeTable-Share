import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';

const TimeTableDataSchema = z.object({
  id: z.string(),
  name: z.string(),
  day: z.string(),
  periodNumber: z.number(),
});

const TimeTableType = z.record(z.string() , z.array(TimeTableDataSchema));


export const frourioSpec = {
  param: z.string(),
  get: {
    res: { 
      200: { body: TimeTableType } ,
      500: { body: z.object({ message: z.string() }) }
     }
  },
} satisfies FrourioSpec;
