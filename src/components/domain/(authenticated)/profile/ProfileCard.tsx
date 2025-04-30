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
    handleToggleEditMode,
    editImage,
    setEditImage,
  } = useProfileEdit(
    props.name,
    props.twitterId,
    props.id,
    props.image,
    props.mutate,
  );

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "0.75rem",
        overflow: "hidden",
        border: "1px solid hsl(240 5.9% 90%)",
        mb: 4,
        p: 2,
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
                  backgroundColor: "hsl(240 5.9% 90%)",
                  mr: 2,
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
                    fontWeight: 600,
                    color: "hsl(240 6% 10%)",
                    fontSize: "1.25rem",
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
            />
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TwitterIcon sx={{ fontSize: 18, color: "#1DA1F2", mr: 0.5 }} />
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
