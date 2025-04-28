"use client";
import PageContainer from "@/components/common/PageContainer";
import ProfileCard from "@/components/domain/(authenticated)/profile/ProfileCard";
import { useProfilePage } from "@/hooks/domain/(authenticated)/profile/useProfilePage";
import { apiClient } from "@/lib/apiClient";
import type { SelectChangeEvent } from "@mui/material";
import { Box, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import TimetablePage from "./Timetable";

const ProfilePage = () => {
  const { displayUser, accessUser, error, isLoading, userMutate } =
    useProfilePage();

  const [privacyProtection, setPrivacyProtection] = useState<string>("");

  const isAccessUserPage =
    accessUser !== undefined &&
    displayUser !== undefined &&
    accessUser.id === displayUser.id;

  const handlePrivacyProtectionChange = async (
    event: SelectChangeEvent<string>,
  ) => {
    await apiClient.privacy.$put({
      body: {
        privacyProtection: event.target.value !== "公開",
      },
    });
    setPrivacyProtection(event.target.value);
  };

  useEffect(() => {
    setPrivacyProtection(displayUser?.privacyProtection ? "非公開" : "公開");
  }, [displayUser]);

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
              value={privacyProtection}
              onChange={handlePrivacyProtectionChange}
              color="secondary"
              size="small"
            >
              <MenuItem value="公開">公開</MenuItem>
              <MenuItem value="非公開">非公開</MenuItem>
            </Select>
          )}
        </Box>
        <TimetablePage isLoading={isLoading} />
      </Box>
    </PageContainer>
  );
};

export default ProfilePage;
