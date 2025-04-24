import { useSpecificUser } from "@/app/hooks/data/useSpecificUser";
import { useParams } from "next/navigation";

export const useProfilePage = () => {
  const params = useParams();
  const { user, error, isLoading, mutate } = useSpecificUser(
    params.id as string,
  );

  return { user, error, isLoading, mutate };
};
