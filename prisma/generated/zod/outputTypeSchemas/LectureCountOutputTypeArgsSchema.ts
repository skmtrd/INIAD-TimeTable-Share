import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { LectureCountOutputTypeSelectSchema } from "./LectureCountOutputTypeSelectSchema";

export const LectureCountOutputTypeArgsSchema: z.ZodType<Prisma.LectureCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => LectureCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export default LectureCountOutputTypeSelectSchema;
