"use client";
import PageContainer from "@/components/common/PageContainer";
import ProfileCard from "@/components/domain/(authenticated)/profile/ProfileCard";
import { dummyTimetableData } from "@/constants/dummyTimetableData";
import { useProfilePage } from "@/hooks/domain/(authenticated)/profile/useProfilePage";
import { Box, MenuItem, Select, Tooltip } from "@mui/material";
import TimetablePage from "./Timetable";

const ProfilePage = () => {
  const {
    displayUser,
    timetable,
    error,
    fetchLoading,
    userMutate,
    authUserMutate,
    isAccessUserPage,
    privacyProtection,
    handlePrivacyProtectionChange,
  } = useProfilePage();

  if (error) return <div>Error loading users</div>;

  const isLoading = fetchLoading;

  return (
    <PageContainer>
      <Box sx={{ width: "100%", maxWidth: "md", pt: 10, pb: 10 }}>
        <ProfileCard
          name={displayUser?.name ?? ""}
          id={displayUser?.id ?? ""}
          twitterId={displayUser?.twitterId ?? null}
          image={displayUser?.image ?? null}
          mutate={userMutate}
          authUserMutate={authUserMutate}
          isLoading={isLoading}
          isAccessUserPage={isAccessUserPage}
        />
        <Box
          sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          {isAccessUserPage && (
            <Tooltip
              title="非公開にするとあなたの時間割は公開されません。あなたと授業が被っている生徒のみ、あなたがその授業を受けていることがわかるようになります。"
              placement="top"
            >
              <Select
                value={displayUser?.privacyProtection ? "非公開" : "公開"}
                onChange={handlePrivacyProtectionChange}
                color="secondary"
                size="small"
              >
                <MenuItem value="公開">公開</MenuItem>
                <MenuItem value="非公開">非公開</MenuItem>
              </Select>
            </Tooltip>
          )}
        </Box>
        <TimetablePage
          timetableData={timetable || dummyTimetableData}
          isLoading={isLoading}
          privacyProtection={privacyProtection}
          isAccessUserPage={isAccessUserPage}
        />
      </Box>
    </PageContainer>
  );
};

export default ProfilePage;
