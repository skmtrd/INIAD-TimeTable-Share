"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
const Dashboard = () => {
  const router = useRouter();
  const { data: session, isPending, error } = authClient.useSession();

  async function handleSignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
        },
      },
    });
  }

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!session) return <p>ログインされていません。</p>;

  console.log(session);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>ようこそ、{session.user.name}さん！</h1>
      {session.user.email && <p>メール: {session.user.email}</p>}
      <Image
        src={session.user.image || ""}
        alt="user-image"
        width={100}
        height={100}
      />
      <button onClick={handleSignOut}>サインアウト</button>
    </div>
  );
};
export default Dashboard;
