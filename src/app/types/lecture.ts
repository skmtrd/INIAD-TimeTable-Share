import type { LectureSchema } from "@/schema/lecture";
import type { z } from "zod";

export type Lecture = z.infer<typeof LectureSchema>;
