import EditActionButton from "@/components/domain/(authenticated)/profile/EditActionButton";
import InputAvatarIcon from "@/components/domain/(authenticated)/profile/InputAvatarIcon";
import { useProfileEdit } from "@/hooks/domain/(authenticated)/profile/useProfileEdit";
import { Twitter as TwitterIcon } from "@mui/icons-material";
import {
  Avatar,
  Box,
  InputAdornment,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import type React from "react";

type ProfileCardProps = {
  name: string;
  id: string;
  twitterId: string | null;
  image: string | null;
  onSave?: (data: { name: string; twitterId: string | null }) => void;
  mutate: () => void;
  authUserMutate: () => void;
  isLoading: boolean;
  isAccessUserPage: boolean;
};

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const {
    editName,
    editTwitterId,
    handleSave,
    handleNameChange,
    handleTwitterIdChange,
    isEditMode,
    isUploading,
    handleToggleEditMode,
    editImage,
    setEditImage,
  } = useProfileEdit(
    props.name,
    props.twitterId,
    props.id,
    props.image,
    props.mutate,
    props.authUserMutate,
    props.isAccessUserPage,
  );

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "1rem",
        overflow: "hidden",
        backgroundColor: "white",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
        mb: 4,
        p: { xs: 2, sm: 3 },
        width: "100%",
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isEditMode ? (
              <Box sx={{ mr: 2 }}>
                <InputAvatarIcon
                  value={editImage}
                  onChange={setEditImage}
                  width="80px"
                  aspectRatio={1}
                  resultWidth={80}
                />
              </Box>
            ) : (
              <Avatar
                src={props.image ?? ""}
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: "#f0f0f0",
                  mr: 2,
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}

            <Box>
              {props.isLoading ? (
                <Skeleton variant="text" width={100} height={40} />
              ) : isEditMode ? (
                <TextField
                  value={editName}
                  onChange={handleNameChange}
                  label="名前"
                  variant="outlined"
                  size="small"
                  sx={{ mb: 0.5 }}
                />
              ) : (
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#222222",
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    mb: 0.5,
                  }}
                >
                  {props.name}
                </Typography>
              )}
            </Box>
          </Box>
          {props.isAccessUserPage && (
            <EditActionButton
              isEditMode={isEditMode}
              handleToggleEditMode={handleToggleEditMode}
              handleSave={handleSave}
              isUploading={isUploading}
            />
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TwitterIcon
            sx={{
              fontSize: 20,
              color: "#1DA1F2",
              mr: 0.5,
              backgroundColor: "rgba(29, 161, 242, 0.1)",
              padding: "4px",
              borderRadius: "50%",
            }}
          />
          {props.isLoading ? (
            <Skeleton variant="text" width={100} height={20} />
          ) : isEditMode ? (
            <TextField
              value={editTwitterId ?? ""}
              onChange={handleTwitterIdChange}
              label="Twitterアカウント"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">@</InputAdornment>
                ),
              }}
            />
          ) : (
            <Typography
              variant="body2"
              component="a"
              href={`https://twitter.com/${props.twitterId}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#1DA1F2",
                fontSize: "0.875rem",
                textDecoration: "none",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              @{props.twitterId ?? "未設定"}
            </Typography>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default ProfileCard;
