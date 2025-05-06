"use client";
import ProfileCard from "@/components/domain/(authenticated)/profile/ProfileCard";
import { dummyTimetableData } from "@/constants/dummyTimetableData";
import { useProfilePage } from "@/hooks/domain/(authenticated)/profile/useProfilePage";
import { LockOutlined, PublicOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
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

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        px: 0,
        height: "100%",
      }}
    >
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
          display: "flex",
          flexDirection: "column",
          pt: 2,
          px: 1.5,
          gap: 2,
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
                    <LockOutlined fontSize="small" color="primary" />
                  ) : (
                    <PublicOutlined fontSize="small" color="primary" />
                  )
                }
                variant="outlined"
                size="small"
                sx={{
                  boxShadow:
                    "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);",
                  border: "none",
                  borderRadius: "0.5rem",
                  textTransform: "none",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "#333333",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  pl: 1.5,
                  pr: 2,
                  py: 0.75,
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
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
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
                  sx: { fontWeight: 600 },
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
                  sx: { fontWeight: 600 },
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
    </Container>
  );
};

export default ProfilePage;
