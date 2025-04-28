"use client";
import PageContainer from "@/components/common/PageContainer";
import ProfileCard from "@/components/domain/(authenticated)/profile/ProfileCard";
import { useProfilePage } from "@/hooks/domain/(authenticated)/profile/useProfilePage";
import { Box } from "@mui/material";
import TimetablePage from "./Timetable";

const ProfilePage = () => {
  const { user, error, isLoading, userMutate } = useProfilePage();

  if (error) return <div>Error loading users</div>;

  return (
    <PageContainer>
      <Box sx={{ width: "100%", maxWidth: "md", pt: 10, pb: 10 }}>
        <ProfileCard
          name={user?.name ?? ""}
          id={user?.id ?? ""}
          twitterId={user?.twitterId ?? null}
          image={user?.image ?? null}
          mutate={userMutate}
          isLoading={isLoading}
        />
        <TimetablePage isLoading={isLoading} />
      </Box>
    </PageContainer>
  );
};

export default ProfilePage;
