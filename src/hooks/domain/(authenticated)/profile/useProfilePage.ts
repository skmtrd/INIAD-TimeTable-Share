import { useTimetableSWR } from "@/hooks/data/useTimetableSWR";
import { useUserDataSWR } from "@/hooks/data/useUserDataSWR";
import { apiClient } from "@/lib/apiClient";
import { authClient } from "@/lib/auth-client";
import { mutateOption } from "@/lib/mutateOption";
import type { SelectChangeEvent } from "@mui/material/Select";
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

  const isAccessUserPage =
    accessUser !== undefined &&
    displayUser !== undefined &&
    accessUser.id === displayUser.id;

  const handlePrivacyProtectionChange = async (
    event: SelectChangeEvent<string>,
  ) => {
    if (displayUser === undefined) return;
    const newDisplayUser = {
      ...displayUser,
      privacyProtection: event.target.value !== "公開",
    };
    await userMutate(
      async () => {
        await apiClient.privacy.$put({
          body: {
            privacyProtection: newDisplayUser.privacyProtection,
          },
        });
        return newDisplayUser;
      },
      {
        ...mutateOption(newDisplayUser),
      },
    );
  };

  return {
    displayUser,
    timetable,
    handlePrivacyProtectionChange,
    error: timetableError || userError || sessionError,
    isLoading: timetableLoading || userIsLoading || sessionIsPending,
    isAccessUserPage,
    userMutate,
  };
};
