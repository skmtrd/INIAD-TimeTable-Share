import { apiClient } from "@/lib/apiClient";
import useSWR from "swr";

export const useTimetableSWR = (
  userId: string,
  privacyProtection: boolean | null,
) => {
  const [key, fetcher] = apiClient["timetable/get/[userId]"].$build({
    params: { userId },
  });

  const {
    data: timetable,
    error,
    isLoading,
    mutate,
  } = useSWR(!privacyProtection ? key : null, fetcher);

  return { timetable, error, isLoading, mutate };
};
