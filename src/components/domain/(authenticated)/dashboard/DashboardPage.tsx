"use client";

import PageContainer from "@/components/common/PageContainer";
import UploadForm from "@/components/domain/(authenticated)/dashboard/UploadForm";
import { useDashboard } from "@/hooks/domain/(authenticated)/dashboard/useDashboard";
import { Box } from "@mui/material";

const DashboardPage = () => {
  const {
    file,
    isUploading,
    message,
    fileInputRef,
    handleFileChange,
    handleUpload,
    openFileDialog,
  } = useDashboard();

  // const { data: session } = authClient.useSession();

  // const { timetable, error, isLoading, mutate } = useTimetableSWR(
  //   session?.user.id ?? ""
  // );

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
        <UploadForm
          file={file}
          isUploading={isUploading}
          message={message ?? ""}
          fileInputRef={fileInputRef}
          handleFileChange={handleFileChange}
          handleUpload={handleUpload}
          openFileDialog={openFileDialog}
        />
      </Box>
    </PageContainer>
  );
};

export default DashboardPage;
