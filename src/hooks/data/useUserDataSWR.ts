import { apiClient } from "@/lib/apiClient";
import useSWR, { preload } from "swr";

const keyAndFetcher = (id: string) => {
  return apiClient["users/[id]"].$build({
    params: { id },
  });
};

export const preloadUserData = (id: string) => {
  const [key, fetcher] = keyAndFetcher(id);
  preload(key, fetcher);
};

export const useUserDataSWR = (id: string) => {
  const [key, fetcher] = keyAndFetcher(id);

  const { data: user, error, isLoading, mutate } = useSWR(key, fetcher);

  return { user, error, isLoading, mutate };
};
