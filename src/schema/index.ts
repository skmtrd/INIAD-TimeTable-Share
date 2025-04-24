import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  // createdAt: z.date(),
  // updatedAt: z.date(),
  twitterId: z.string().nullable(),
});
