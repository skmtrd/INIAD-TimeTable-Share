import { useTimetableSWR } from "@/hooks/data/useTimetableSWR";
import { useUserDataSWR } from "@/hooks/data/useUserDataSWR";
import { authClient } from "@/lib/auth-client";
import { useParams } from "next/navigation";

export const useProfilePage = () => {
  const params = useParams();
  const {
    data: session,
    isPending: sessionIsPending,
    error: sessionError,
  } = authClient.useSession();

  const accessUser = session?.user;

  const {
    user: displayUser,
    error: userError,
    isLoading: userIsLoading,
    mutate: userMutate,
  } = useUserDataSWR(params.id as string);
  const {
    timetable,
    error: timetableError,
    isLoading: timetableLoading,
  } = useTimetableSWR(params.id as string);

  return {
    displayUser,
    accessUser,
    timetable,
    error: timetableError || userError || sessionError,
    isLoading: timetableLoading || userIsLoading || sessionIsPending,
    userMutate,
  };
};
