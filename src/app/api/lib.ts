import { auth } from "@/auth";
import { headers } from "next/headers";

export const getUserInfo = async () => {
  const user = await auth.api.getSession({
    headers: await headers(),
  });

  if (!user) {
    return null;
  }

  return user.user;
};
