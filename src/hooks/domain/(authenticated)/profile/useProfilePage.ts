import { useAuthUserSWR } from "@/hooks/data/useAuthUserSWR";
import { useTimetableSWR } from "@/hooks/data/useTimetableSWR";
import { useUserDataSWR } from "@/hooks/data/useUserDataSWR";
import { apiClient } from "@/lib/apiClient";
import { mutateOption } from "@/lib/mutateOption";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useParams } from "next/navigation";

export const useProfilePage = () => {
  const params = useParams();

  const {
    authUser: accessUser,
    isLoading: sessionIsLoading,
    error: sessionError,
    mutate: authUserMutate,
  } = useAuthUserSWR();

  const {
    user: displayUser,
    error: userError,
    isLoading: userIsLoading,
    mutate: userMutate,
  } = useUserDataSWR(params.id as string);

  const isAccessUserPage =
    accessUser !== undefined &&
    displayUser !== undefined &&
    accessUser.id === displayUser.id;

  const privacyProtection =
    displayUser?.privacyProtection === true && !isAccessUserPage;

  const {
    timetable,
    error: timetableError,
    isLoading: timetableLoading,
  } = useTimetableSWR(params.id as string, privacyProtection);

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
    accessUser,
    displayUser,
    timetable,
    handlePrivacyProtectionChange,
    error: timetableError || userError || sessionError,
    fetchLoading: timetableLoading || userIsLoading || sessionIsLoading,
    isAccessUserPage,
    privacyProtection,
    userMutate,
    authUserMutate,
  };
};
