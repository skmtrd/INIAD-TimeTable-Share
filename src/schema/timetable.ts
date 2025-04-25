import { z } from "zod";
import { LectureSchema } from "./lecture";

export const TimeTableSchema = z.record(z.string(), z.array(LectureSchema));
