import { apiClient } from "@/lib/apiClient";
import useSWR from "swr";

export const useUserDataSWR = (id: string) => {
  const [key, fetcher] = apiClient["users/[id]"].$build({
    params: { id },
  });

  const { data: user, error, isLoading, mutate } = useSWR(key, fetcher);

  return { user, error, isLoading, mutate };
};
