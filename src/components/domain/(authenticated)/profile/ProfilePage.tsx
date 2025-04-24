"use client";

import Timetable from "@/app/(authenticated)/timetable/page";
import { useProfilePage } from "@/app/hooks/domain/(authenticated)/profile/useProfilePage";
import PageContainer from "@/components/common/PageContainer";
import ProfileCard from "@/components/domain/(authenticated)/profile/ProfileCard";
import { Box } from "@mui/material";

const ProfilePage = () => {
  const { user, error, isLoading, mutate } = useProfilePage();

  if (error) return <div>Error loading users</div>;
  if (!user) return <div>Loading...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <PageContainer>
      <Box sx={{ width: "100%", maxWidth: "md", pt: 10, pb: 10 }}>
        <ProfileCard
          name={user.name}
          id={user.id}
          twitterId={user.twitterId}
          image={user.image}
          mutate={mutate}
        />
        <Timetable />
      </Box>
    </PageContainer>
  );
};

export default ProfilePage;
