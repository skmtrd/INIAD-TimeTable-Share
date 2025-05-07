import { z } from "zod";

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "email",
  "emailVerified",
  "image",
  "createdAt",
  "updatedAt",
  "twitterId",
  "privacyProtection",
]);

export default UserScalarFieldEnumSchema;
