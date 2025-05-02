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

export const authenticationCheck = async () => {
  const user = await auth.api.getSession({
    headers: await headers(),
  });

  if (!user) {
    return false;
  }

  if (!user.user.email.endsWith("@iniad.org")) {
    return false;
  }

  return user.user;
};
