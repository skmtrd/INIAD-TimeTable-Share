import { z } from "zod";

export const LectureSchema = z.object({
  id: z.string(),
  name: z.string(),
  day: z.string(),
  periodNumber: z.number(),
});
