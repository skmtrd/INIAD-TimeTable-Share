"use client";

import PageContainer from "@/components/common/PageContainer";
import UploadForm from "@/components/domain/(authenticated)/dashboard/UploadForm";
import { useDashboard } from "@/hooks/domain/(authenticated)/dashboard/useDashboard";
import { Box, CircularProgress, Link, Typography } from "@mui/material";
import Timetable from "../profile/Timetable";

const DashboardPage = () => {
  const { timetable, isLoading, timetableMutate } = useDashboard();

  return (
    <PageContainer>
      <Box
        sx={{
          width: "100%",
          maxWidth: "md",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLoading || !timetable ? (
          <CircularProgress />
        ) : Object.keys(timetable).length > 0 ? (
          <Timetable
            timetableData={timetable}
            privacyProtection={false}
            isLoading={isLoading}
            isAccessUserPage={true}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Link
                href="https://www.ace.toyo.ac.jp/ct/home"
                target="_blank"
                rel="noopener noreferrer"
                variant="h6"
              >
                Toyo-Net Ace
              </Link>
              <Typography variant="h6">
                にアクセスして時間割のjsonファイルをダウンロード
              </Typography>
            </Box>
            <UploadForm timetableMutate={timetableMutate} />
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};

export default DashboardPage;
