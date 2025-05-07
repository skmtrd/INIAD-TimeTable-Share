import { z } from "zod";

export const LectureScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "createdAt",
  "updatedAt",
]);

export default LectureScalarFieldEnumSchema;
