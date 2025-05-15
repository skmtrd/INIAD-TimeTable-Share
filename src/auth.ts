import { APIError, betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./lib/prisma";

export const auth = betterAuth({
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          // メールアドレスのドメインと検証状態をチェック
          if (!(user.emailVerified && user.email?.endsWith("@iniad.org"))) {
            throw new APIError("BAD_REQUEST", {
              message: "Email must end with @iniad.org",
            });
          }
        },
      },
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    },
  },
});
