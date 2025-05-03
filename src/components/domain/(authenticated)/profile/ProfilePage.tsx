"use client";
import PageContainer from "@/components/common/PageContainer";
import ProfileCard from "@/components/domain/(authenticated)/profile/ProfileCard";
import { dummyTimetableData } from "@/constants/dummyTimetableData";
import { useProfilePage } from "@/hooks/domain/(authenticated)/profile/useProfilePage";
import { LockOutlined, PublicOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { useRouter } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import SettingRecommendModal from "../dashboard/SettingRecommendModal";
import TimetablePage from "./Timetable";
const ProfilePage = () => {
  const {
    accessUser,
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const [openSettingRecommendModal, setOpenSettingRecommendModal] =
    useState(false);

  useEffect(() => {
    if (accessUser) {
      if (!accessUser.twitterId) {
        setTimeout(() => {
          setOpenSettingRecommendModal(true);
        }, 2000);
      }
    }
  }, [accessUser]);

  if (error) return <div>Error loading users</div>;

  const isLoading = fetchLoading;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePublicSelect = () => {
    handlePrivacyProtectionChange({
      target: { value: "公開" },
    } as SelectChangeEvent<string>);
    handleClose();
  };

  const handlePrivateSelect = () => {
    handlePrivacyProtectionChange({
      target: { value: "非公開" },
    } as SelectChangeEvent<string>);
    handleClose();
  };

  if (timetable && Object.keys(timetable).length === 0) {
    router.push("/dashboard");
  }

  return (
    <PageContainer>
      <SettingRecommendModal
        open={openSettingRecommendModal}
        onClose={() => setOpenSettingRecommendModal(false)}
        onConfigure={() => setOpenSettingRecommendModal(false)}
        settingName="表示名とTwitter ID"
        description="アプリをより快適に使用するために、表示名とTwitter IDを設定しましょう。これにより、他のユーザーがあなたを見つけやすくなります。"
      />
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
            <Tooltip title="時間割の公開設定を変更します" placement="top">
              <Button
                id="visibility-button"
                aria-controls={open ? "visibility-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                startIcon={
                  displayUser?.privacyProtection ? (
                    <LockOutlined fontSize="small" />
                  ) : (
                    <PublicOutlined fontSize="small" />
                  )
                }
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: "0.5rem",
                  textTransform: "none",
                  borderColor: "hsl(240 5.9% 90%)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "#333333",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  pl: 1.5,
                  pr: 2,
                  py: 0.75,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                  "&:hover": {
                    backgroundColor: "hsl(210 100% 97%)",
                    borderColor: "hsl(240 5.9% 80%)",
                  },
                }}
              >
                {displayUser?.privacyProtection ? "非公開" : "公開"}
              </Button>
            </Tooltip>
          )}
          <Menu
            id="visibility-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "visibility-button",
              dense: isMobile,
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            slotProps={{
              paper: {
                elevation: 2,
                sx: {
                  mt: 1.5,
                  minWidth: 240,
                  overflow: "visible",
                  borderRadius: "0.5rem",
                  border: "1px solid hsl(240 5.9% 90%)",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                    borderTop: "1px solid hsl(240 5.9% 90%)",
                    borderLeft: "1px solid hsl(240 5.9% 90%)",
                  },
                },
              },
            }}
          >
            <Box sx={{ px: 2, py: 1.5 }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#666666",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                }}
              >
                時間割表示設定
              </Typography>
            </Box>
            <MenuItem
              onClick={handlePublicSelect}
              sx={{
                py: 1.5,
                "&:hover": { bgcolor: "hsl(210 100% 97%)" },
                backgroundColor:
                  displayUser?.privacyProtection === false
                    ? "hsl(210 100% 97%)"
                    : "inherit",
              }}
            >
              <ListItemIcon>
                <PublicOutlined
                  fontSize="small"
                  sx={{ color: "hsl(210 100% 50%)" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="公開"
                secondary="すべてのユーザーが時間割を閲覧できます"
                primaryTypographyProps={{
                  sx: { fontWeight: 500 },
                }}
                secondaryTypographyProps={{
                  sx: { fontSize: "0.75rem" },
                }}
              />
            </MenuItem>
            <MenuItem
              onClick={handlePrivateSelect}
              sx={{
                py: 1.5,
                "&:hover": { bgcolor: "hsl(210 100% 97%)" },
                backgroundColor:
                  displayUser?.privacyProtection === true
                    ? "hsl(210 100% 97%)"
                    : "inherit",
              }}
            >
              <ListItemIcon>
                <LockOutlined
                  fontSize="small"
                  sx={{ color: "hsl(210 100% 50%)" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="非公開"
                secondary="同じ授業の受講者のみ情報を共有します"
                primaryTypographyProps={{
                  sx: { fontWeight: 500 },
                }}
                secondaryTypographyProps={{
                  sx: { fontSize: "0.75rem" },
                }}
              />
            </MenuItem>
          </Menu>
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
