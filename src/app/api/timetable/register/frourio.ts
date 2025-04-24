import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';



export const frourioSpec = {
  post: {
    format:'formData',
    body:  z.object({file:z.instanceof(File) , userId:z.string()}),
    res: { 
     201: { body:z.object({message:z.string()}) },
     400: {body:z.object({message:z.string()})}, 
     401: { body: z.object({ message: z.string() }) }, 
     500: { body: z.object({ message: z.string() }) },
     },
  },
} satisfies FrourioSpec;
