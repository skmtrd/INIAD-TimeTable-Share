"use client";
import { useDashboard } from "@/app/hooks/domain/(authenticated)/dashboard/useDashboard";
import PageContainer from "@/components/common/PageContainer";
import UploadIcon from "@mui/icons-material/Upload";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

const Dashboard = () => {
  const {
    file,
    isUploading,
    message,
    fileInputRef,
    handleFileChange,
    handleUpload,
    openFileDialog,
  } = useDashboard();
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
        <Box
          sx={{
            width: "100%",
            maxWidth: "sm",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
              mb: 3,
              backgroundColor: "hsl(0 0% 100%)",
              border: "1px solid hsl(240 5.9% 90%)",
              borderRadius: "0.5rem",
              cursor: "pointer",
              transition: "border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                borderColor: "hsl(240 5.9% 80%)",
              },
              "&:focus-within": {
                borderColor: "hsl(240 5.9% 70%)",
                boxShadow: "0 0 0 2px hsl(240 5% 96%)",
              },
            }}
            onClick={openFileDialog}
          >
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept={".json"}
              onChange={handleFileChange}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "9999px",
                backgroundColor: "hsl(240 5% 96%)",
                mb: 2,
              }}
            >
              <UploadIcon
                sx={{
                  fontSize: 24,
                  color: "hsl(240 4% 46%)",
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "hsl(240 6% 10%)",
                fontWeight: 500,
                fontSize: "0.875rem",
                mb: 0.5,
              }}
            >
              {file ? file.name : "ファイルを選択"}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "hsl(240 3.8% 46.1%)",
                fontSize: "0.75rem",
              }}
            >
              クリックしてファイルを選択
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={handleUpload}
            disabled={!file || isUploading}
            fullWidth
            disableElevation
            sx={{
              borderRadius: "0.375rem",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.875rem",
              py: 1.2,
              backgroundColor: "hsl(240 5.9% 10%)",
              "&:hover": {
                backgroundColor: "hsl(240 4.9% 15%)",
              },
              "&:disabled": {
                backgroundColor: "hsl(240 5.9% 90%)",
                color: "hsl(240 5.9% 40%)",
              },
            }}
          >
            {isUploading && (
              <CircularProgress
                size={20}
                sx={{
                  color: "hsl(240 5.9% 100%)",
                  mr: 1,
                }}
              />
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {message}
            </Box>
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
