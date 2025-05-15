"use server";

import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

/**
 * ユーザーが認証されているかどうかを確認する
 * 認証されていない場合は/loginにリダイレクする
 * 認証されている場合はtrueを返す
 */
export async function userAuthenticationCheck() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

  return session.user;
}
