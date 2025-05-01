import { apiClient } from "@/lib/apiClient";
import useSWR from "swr";

export const useParticipantsSWR = (lectureId: string) => {
  const [key, fetcher] = apiClient["lecture/[lectureId]/participant"].$build({
    params: { lectureId },
  });

  const { data: participants, error, isLoading, mutate } = useSWR(key, fetcher);
  return { participants, error, isLoading, mutate };
};
