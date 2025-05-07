import { z } from "zod";

/////////////////////////////////////////
// LECTURE SCHEMA
/////////////////////////////////////////

export const LectureSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Lecture = z.infer<typeof LectureSchema>;

export default LectureSchema;
