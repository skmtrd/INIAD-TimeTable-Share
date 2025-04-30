import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  image: z.string().nullable(),
  twitterId: z.string().nullable(),
  privacyProtection: z.boolean(),
});

export const lectureSchema = z.object({
  id: z.string(),
  name: z.string(),
  day: z.enum([
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]),
  periodNumber: z.number().int().positive(),
});

export const timetableSchema = z.record(
  z.string().regex(/^\d+$/),
  z.array(lectureSchema)
);
