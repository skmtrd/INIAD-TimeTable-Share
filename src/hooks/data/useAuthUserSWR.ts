import { apiClient } from "@/lib/apiClient";
import useSWR from "swr";

export const useAuthUserSWR = () => {
  const [key, fetcher] = apiClient.authUser.$build();

  const { data: authUser, error, isLoading, mutate } = useSWR(key, fetcher);
  return { authUser, error, isLoading, mutate };
};
