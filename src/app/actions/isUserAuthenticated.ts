"use server";

import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

/**
 * ユーザーが認証されているかどうかを確認する
 * 認証されていない場合は/loginにリダイレクトする
 */
export async function isUserAuthenticated() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!session) {
    redirect("/login");
  }

  return true;
}
