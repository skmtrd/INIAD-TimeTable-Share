import { useTimetableSWR } from "@/hooks/data/useTimetableSWR";
import { useUserDataSWR } from "@/hooks/data/useUserDataSWR";
import { useParams } from "next/navigation";

export const useProfilePage = () => {
  const params = useParams();
  const {
    user,
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
    user,
    timetable,
    error: timetableError || userError,
    isLoading: timetableLoading || userIsLoading,
    userMutate,
  };
};
