"use client";

import Timetable from "@/app/(authenticated)/timetable/page";
import PageContainer from "@/components/common/PageContainer";
import { apiClient } from "@/lib/apiClient";
import { Edit as EditIcon, Twitter as TwitterIcon } from "@mui/icons-material";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import useSWR from "swr";

const ProfilePage = () => {
  const [key, fetcher] = apiClient["user/[id]"].$build({
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
                  src="/placeholder.svg?height=80&width=80"
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
                    {user.name}
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
                href={`https://twitter.com/${user.twitterId}`}
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
                @{user.twitterId}
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Timetable />
      </Box>
    </PageContainer>
  );
};

export default ProfilePage;
