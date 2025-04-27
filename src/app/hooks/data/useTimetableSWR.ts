import { apiClient } from "@/lib/apiClient";
import useSWR from "swr";

export const useTimetableSWR = (userId: string) => {
  const [key, fetcher] = apiClient["timetable/get/[userId]"].$build({
    params: { userId },
  });

  const { data: timetable, error, isLoading, mutate } = useSWR(key, fetcher);

  return { timetable, error, isLoading, mutate };
};
