"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>ようこそ、{session.user.name}さん！</h1>
      {session.user.email && <p>メール: {session.user.email}</p>}
      <Image
        alt="user-image"
        height={100}
        src={session.user.image || ""}
        width={100}
      />
      <button type="button" onClick={handleSignOut}>
        サインアウト
      </button>
    </div>
  );
};
export default Dashboard;
