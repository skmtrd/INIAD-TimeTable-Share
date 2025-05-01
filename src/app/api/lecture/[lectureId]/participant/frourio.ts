import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';

const LectureParticipantSchema = z.array(
  z.object({
  lectureId: z.string(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    image: z.string().nullable(),
    twitterId: z.string().nullable(),
  })
})
);

export const frourioSpec = {
  param: z.string(),
  get: {
    res: { 
    200: { body: LectureParticipantSchema }, 
    500: { body: z.object({ message: z.string() }) } 
    },
  },
} satisfies FrourioSpec;
