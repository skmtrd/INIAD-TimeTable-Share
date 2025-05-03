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
      <Box
        sx={{
          width: "100%",
          maxWidth: "md",
          mt: { xs: 2, sm: 4, md: 6 },
          mb: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 0 },
        }}
      >
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
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            mb: 2,
          }}
        >
          {isAccessUserPage && (
            <Tooltip
              title="非公開にするとあなたの時間割は公開されません。あなたと授業が被っている生徒のみ、あなたがその授業を受けていることがわかるようになります。"
              placement="top"
            >
              <Select
                value={displayUser?.privacyProtection ? "非公開" : "公開"}
                onChange={handlePrivacyProtectionChange}
                size="small"
                sx={{
                  height: "36px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "0.5rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#d0d0d0",
                  },
                  "& .MuiSelect-select": {
                    py: 1,
                    px: 1.5,
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    color: "#333333",
                  },
                }}
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
