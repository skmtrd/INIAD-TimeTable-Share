import type { lectureSchema, timetableSchema } from "@/schema";
import type { z } from "zod";

export type Timetable = z.infer<typeof timetableSchema>;

export type Lecture = z.infer<typeof lectureSchema>;
