import { useUserDataSWR } from "@/app/hooks/data/useUserDataSWR";
import { useParams } from "next/navigation";

export const useProfilePage = () => {
  const params = useParams();
  const { user, error, isLoading, mutate } = useUserDataSWR(
    params.id as string,
  );

  return { user, error, isLoading, mutate };
};
