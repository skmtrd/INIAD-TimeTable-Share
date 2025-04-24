import { Edit as EditIcon, Twitter as TwitterIcon } from "@mui/icons-material";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import type React from "react";

type ProfileCardProps = {
  name: string;
  twitterId: string | null;
  image: string | null;
};

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
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
        {/* アバターと編集ボタン */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={props.image ?? ""}
              sx={{
                width: 80,
                height: 80,
                backgroundColor: "hsl(240 5.9% 90%)",
                mr: 2,
              }}
            />
            <Box>
              {/* 名前とユーザー名 */}
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
            </Box>
          </Box>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{
              borderRadius: "0.5rem",
              textTransform: "none",
              fontWeight: 500,
              borderColor: "hsl(240 5.9% 90%)",
              color: "hsl(240 6% 10%)",
              height: "36px",
              "&:hover": {
                borderColor: "hsl(240 5.9% 80%)",
                backgroundColor: "hsl(240 5% 96%)",
              },
            }}
          >
            編集
          </Button>
        </Box>
        {/* Xへのリンク */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TwitterIcon sx={{ fontSize: 18, color: "#1DA1F2", mr: 0.5 }} />
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
        </Box>
      </Box>
    </Paper>
  );
};

export default ProfileCard;
