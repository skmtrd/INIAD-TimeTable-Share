"use client";

import PageContainer from "@/components/common/PageContainer";
import UploadForm from "@/components/domain/(authenticated)/dashboard/UploadForm";
import { useDashboard } from "@/hooks/domain/(authenticated)/dashboard/useDashboard";
import { Box, CircularProgress } from "@mui/material";
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
          <UploadForm timetableMutate={timetableMutate} />
        )}
      </Box>
    </PageContainer>
  );
};

export default DashboardPage;
