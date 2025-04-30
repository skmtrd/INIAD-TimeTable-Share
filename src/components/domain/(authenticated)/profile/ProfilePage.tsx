"use client";
import PageContainer from "@/components/common/PageContainer";
import ProfileCard from "@/components/domain/(authenticated)/profile/ProfileCard";
import { useProfilePage } from "@/hooks/domain/(authenticated)/profile/useProfilePage";
import { Box, MenuItem, Select } from "@mui/material";
import TimetablePage from "./Timetable";
import { timetableData } from "@/constants/dummyTimetableData";

const ProfilePage = () => {
  const {
    displayUser,
    error,
    isLoading,
    userMutate,
    isAccessUserPage,
    handlePrivacyProtectionChange,
  } = useProfilePage();

  if (error) return <div>Error loading users</div>;

  return (
    <PageContainer>
      <Box sx={{ width: "100%", maxWidth: "md", pt: 10, pb: 10 }}>
        <ProfileCard
          name={displayUser?.name ?? ""}
          id={displayUser?.id ?? ""}
          twitterId={displayUser?.twitterId ?? null}
          image={displayUser?.image ?? null}
          mutate={userMutate}
          isLoading={isLoading}
          isAccessUserPage={isAccessUserPage}
        />
        <Box
          sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          {isAccessUserPage && (
            <Select
              value={displayUser?.privacyProtection ? "非公開" : "公開"}
              onChange={handlePrivacyProtectionChange}
              color="secondary"
              size="small"
            >
              <MenuItem value="公開">公開</MenuItem>
              <MenuItem value="非公開">非公開</MenuItem>
            </Select>
          )}
        </Box>
        <TimetablePage isLoading={isLoading} timetableData={timetableData} />
      </Box>
    </PageContainer>
  );
};

export default ProfilePage;
