import { z } from "zod";

export const TimeTableScalarFieldEnumSchema = z.enum([
  "userId",
  "lectureId",
  "day",
  "periodNumber",
  "createdAt",
  "updatedAt",
]);

export default TimeTableScalarFieldEnumSchema;
