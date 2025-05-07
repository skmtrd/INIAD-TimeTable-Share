import { z } from "zod";

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  twitterId: z.string().nullable(),
  privacyProtection: z.boolean(),
});

export type User = z.infer<typeof UserSchema>;

export default UserSchema;
