"use client";

import Timetable from "@/app/(authenticated)/timetable/page";
import PageContainer from "@/components/common/PageContainer";
import ProfileCard from "@/components/domain/(authenticated)/profile/ProfileCard";
import { apiClient } from "@/lib/apiClient";
import { Box } from "@mui/material";
import useSWR from "swr";

const ProfilePage = () => {
  const [key, fetcher] = apiClient["users/[id]"].$build({
    params: { id: "2YPPVTrhmh5lSPwtC4vtBVirPla8bf0T" },
  });

  const {
    data: user,
    error,
    isLoading,
  } = useSWR(key, fetcher, {
    refreshInterval: 100,
  });
  if (error) return <div>Error loading users</div>;
  if (!user) return <div>Loading...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <PageContainer>
      <Box sx={{ width: "100%", maxWidth: "md", pt: 10, pb: 10 }}>
        <ProfileCard
          name={user.name}
          twitterId={user.twitterId}
          image={user.image}
        />
        <Timetable />
      </Box>
    </PageContainer>
  );
};

export default ProfilePage;
