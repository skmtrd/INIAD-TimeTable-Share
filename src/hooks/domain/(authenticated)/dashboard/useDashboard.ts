import { useAuthUserSWR } from "@/hooks/data/useAuthUserSWR";
import { useTimetableSWR } from "@/hooks/data/useTimetableSWR";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useDashboard = () => {
  const router = useRouter();
  const { authUser, isLoading: isAuthUserLoading } = useAuthUserSWR();
  const {
    timetable,
    isLoading: isTimetableLoading,
    mutate: timetableMutate,
  } = useTimetableSWR(authUser?.id ?? "", false);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfigure = () => {
    router.push(`/profile/${authUser?.id}`);
    setOpen(false);
  };

  useEffect(() => {
    if (authUser) {
      if (!authUser.twitterId) {
        setTimeout(() => {
          setOpen(true);
        }, 2000);
      }
    }
  }, [authUser]);

  return {
    authUser,
    timetable,
    isLoading: isAuthUserLoading || isTimetableLoading,
    timetableMutate,
    open,
    handleClose,
    handleConfigure,
  };
};
