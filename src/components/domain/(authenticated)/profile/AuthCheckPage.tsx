"use client";

import { useTimetableSWR } from "@/hooks/data/useTimetableSWR";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type ProfilePageProps = {
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined;
  };
};

const AuthCheckPage = (props: ProfilePageProps) => {
  const router = useRouter();
  const { timetable, isLoading } = useTimetableSWR(props.user.id, false);
  useEffect(() => {
    if (!isLoading && timetable) {
      if (Object.keys(timetable).length > 0) {
        router.push(`/profile/${props.user.id}`);
      } else {
        router.push("/dashboard");
      }
    }
  }, [timetable, isLoading, router, props.user.id]);

  return <div />;
};

export default AuthCheckPage;
