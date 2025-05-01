import { useAuthUserSWR } from "@/hooks/data/useAuthUserSWR";
import { useTimetableSWR } from "@/hooks/data/useTimetableSWR";

export const useDashboard = () => {
  const { authUser, isLoading: isAuthUserLoading } = useAuthUserSWR();
  const {
    timetable,
    isLoading: isTimetableLoading,
    mutate: timetableMutate,
  } = useTimetableSWR(authUser?.id ?? "", false);

  return {
    timetable,
    isLoading: isAuthUserLoading || isTimetableLoading,
    timetableMutate,
  };
};
