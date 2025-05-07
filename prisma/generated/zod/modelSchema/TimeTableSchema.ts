import { z } from "zod";

/////////////////////////////////////////
// TIME TABLE SCHEMA
/////////////////////////////////////////

export const TimeTableSchema = z.object({
  userId: z.string(),
  lectureId: z.string(),
  day: z.string(),
  periodNumber: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type TimeTable = z.infer<typeof TimeTableSchema>;

export default TimeTableSchema;
