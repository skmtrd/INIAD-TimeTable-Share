"use server";

import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

/**
 * ユーザーが認証されているかどうかを確認する
 * 認証されていない場合は/loginにリダイレクトする
 * 認証されている場合はtrueを返す
 */
export async function userAuthenticationCheck() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!session) redirect("/login");

  return true;
}
