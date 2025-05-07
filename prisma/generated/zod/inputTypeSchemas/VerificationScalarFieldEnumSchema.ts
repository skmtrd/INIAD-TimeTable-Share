import { z } from "zod";

export const VerificationScalarFieldEnumSchema = z.enum([
  "id",
  "identifier",
  "value",
  "expiresAt",
  "createdAt",
  "updatedAt",
]);

export default VerificationScalarFieldEnumSchema;
