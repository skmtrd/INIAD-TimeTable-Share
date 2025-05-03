"use client";

import PageContainer from "@/components/common/PageContainer";
import UploadForm from "@/components/domain/(authenticated)/dashboard/UploadForm";
import { useDashboard } from "@/hooks/domain/(authenticated)/dashboard/useDashboard";
import { Launch, School } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Link,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Timetable from "../profile/Timetable";
import SettingRecommendModal from "./SettingRecommendModal";

const DashboardPage = () => {
  const {
    timetable,
    isLoading,
    timetableMutate,
    open,
    handleClose,
    handleConfigure,
  } = useDashboard();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer>
      <SettingRecommendModal
        open={open}
        onClose={handleClose}
        onConfigure={handleConfigure}
        settingName="表示名とTwitter ID"
        description="アプリをより快適に使用するために、表示名とTwitter IDを設定しましょう。これにより、他のユーザーがあなたを見つけやすくなります。"
      />
      <Box
        sx={{
          width: "100%",
          maxWidth: "md",
          minHeight: { xs: "70vh", md: "75vh" },
          display: "flex",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          py: { xs: 2, md: 3 },
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
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              borderRadius: "1rem",
              overflow: "hidden",
              backgroundColor: "white",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
              p: { xs: 3, sm: 4, md: 5 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: { xs: 4, md: 5 },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <School
                  sx={{
                    fontSize: { xs: 48, md: 60 },
                    color: "hsl(210 100% 50%)",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    color: "#222222",
                    mb: 1.5,
                  }}
                >
                  時間割を登録しましょう
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    color: "#555555",
                    maxWidth: "550px",
                    mb: 2,
                    px: { xs: 1, sm: 2 },
                  }}
                >
                  INIAD-TimeTable-Shareを利用するには、Toyo-Net
                  Aceから時間割データをダウンロードしてアップロードしてください。
                </Typography>
              </Box>

              <Stepper
                activeStep={0}
                alternativeLabel={!isMobile}
                orientation={isMobile ? "vertical" : "horizontal"}
                sx={{
                  width: "100%",
                  maxWidth: "600px",
                  px: { xs: 0, sm: 2 },
                }}
              >
                <Step>
                  <StepLabel
                    sx={{
                      "& .MuiStepLabel-label": {
                        mt: isMobile ? 0 : 1,
                        color: "#222222",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: isMobile ? "left" : "center",
                        mt: isMobile ? 0 : 1,
                      }}
                    >
                      <Link
                        href="https://www.ace.toyo.ac.jp/ct/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          color: "hsl(210 100% 50%)",
                          textDecoration: "none",
                          fontWeight: 600,
                          mb: 0.5,
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Toyo-Net Ace{" "}
                        <Launch sx={{ ml: 0.5, fontSize: "0.9rem" }} />
                      </Link>
                      <Typography variant="body2" sx={{ color: "#555555" }}>
                        にアクセスして時間割を表示
                      </Typography>
                    </Box>
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel
                    sx={{
                      "& .MuiStepLabel-label": {
                        mt: isMobile ? 0 : 1,
                        color: "#222222",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: isMobile ? "left" : "center",
                        mt: isMobile ? 0 : 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        JSONファイルをダウンロード
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555555" }}>
                        画面中央の「時間割をJSON化」をクリック
                      </Typography>
                    </Box>
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel
                    sx={{
                      "& .MuiStepLabel-label": {
                        mt: isMobile ? 0 : 1,
                        color: "#222222",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: isMobile ? "left" : "center",
                        mt: isMobile ? 0 : 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        ファイルをアップロード
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555555" }}>
                        下のフォームからファイルを選択
                      </Typography>
                    </Box>
                  </StepLabel>
                </Step>
              </Stepper>

              <Box
                sx={{
                  width: "100%",
                  mt: { xs: 2, md: 3 },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <UploadForm timetableMutate={timetableMutate} />
              </Box>
            </Box>
          </Paper>
        )}
      </Box>
    </PageContainer>
  );
};

export default DashboardPage;
