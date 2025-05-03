import { useParticipantsSWR } from "@/hooks/data/useParticipantsSWR";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Avatar,
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Modal,
  Paper,
  Skeleton,
  type SxProps,
  type Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type React from "react";

// スタイル定義
const modalSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(5px)",
  p: { xs: 2, sm: 3 }, // モバイルでは余白を追加
};

const modalContentSx = (isMobile: boolean): SxProps<Theme> => ({
  width: "100%",
  maxWidth: isMobile ? "calc(100% - 24px)" : 500, // モバイルでは画面端に余白を持たせる
  maxHeight: isMobile ? "80vh" : "85vh", // モバイルでは少し小さく
  overflow: "auto",
  outline: "none",
  boxShadow:
    "0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  borderRadius: isMobile ? "12px" : "16px", // モバイルでは角を少し小さく
  bgcolor: "#ffffff",
});

const modalHeaderSx = (isMobile: boolean): SxProps<Theme> => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: isMobile ? "14px 16px" : "18px 24px", // モバイルではコンパクトに
  borderBottom: "1px solid hsl(210 80% 92%)",
  // より鮮やかな青みのグラデーション
  background: "linear-gradient(to right, white, hsl(210 100% 97%))",
  borderTopLeftRadius: isMobile ? "12px" : "16px",
  borderTopRightRadius: isMobile ? "12px" : "16px",
});

const studentListSx: SxProps<Theme> = {
  maxHeight: { xs: "360px", sm: "450px" }, // モバイルでは少し小さく
  overflow: "auto",
  backgroundColor: "#FFFFFF",
  "&::-webkit-scrollbar": {
    width: { xs: "4px", sm: "8px" }, // モバイルではスクロールバーを細く
  },
  "&::-webkit-scrollbar-track": {
    background: "hsl(210 80% 95%)",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "hsl(210 80% 85%)",
    borderRadius: "4px",
    "&:hover": {
      background: "hsl(210 80% 75%)",
    },
  },
};

const studentItemSx = (isMobile: boolean): SxProps<Theme> => ({
  display: "flex",
  padding: isMobile ? "10px 16px" : "14px 24px", // モバイルではコンパクトに
  cursor: "pointer",
  transition: "all 0.2s ease",
  borderBottom: "1px solid hsl(210 80% 95%)",
  "&:hover": {
    backgroundColor: "hsl(210 100% 97%)",
  },
});

const studentInfoSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  marginLeft: { xs: 1.5, sm: 2 }, // モバイルでは少し余白を小さく
  justifyContent: "center",
};

const twitterHandleSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  color: "#666666",
  fontSize: { xs: "0.8rem", sm: "0.875rem" }, // モバイルでは文字サイズを小さく
  marginTop: { xs: 0.3, sm: 0.5 }, // モバイルでは余白を小さく
};

const closeButtonSx: SxProps<Theme> = {
  borderRadius: "8px",
  color: "hsl(210 80% 45%)",
  transition: "all 0.2s ease",
  padding: { xs: "4px", sm: "8px" }, // モバイルではパディングを小さく
  "&:hover": {
    bgcolor: "hsl(210 80% 95%)",
    color: "hsl(210 100% 40%)",
  },
};

type ParticipantsModalProps = {
  isOpen: boolean;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  lectureId: string;
  lectureName: string;
  isAccessUserPage: boolean;
};

const ParticipantsModal: React.FC<ParticipantsModalProps> = (props) => {
  const { participants } = useParticipantsSWR(
    props.lectureId,
    props.isAccessUserPage,
  );
  const isLoading = participants === undefined;
  const skeletonCount = 5;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="class-modal-title"
      sx={modalSx}
    >
      <Paper sx={modalContentSx(isMobile)} elevation={0}>
        <Box sx={modalHeaderSx(isMobile)}>
          <Typography
            id="class-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 600,
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
              color: "#222222",
              fontSize: { xs: "1rem", sm: "1.1rem" }, // モバイルでは文字サイズを小さく
              letterSpacing: "-0.01em",
              // 長いタイトルを省略表示
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: { xs: "calc(100% - 40px)", sm: "calc(100% - 48px)" }, // 閉じるボタン用のスペースを確保
            }}
          >
            {props.lectureName}
          </Typography>
          <IconButton
            onClick={props.handleClose}
            size={isMobile ? "small" : "medium"}
            sx={closeButtonSx}
          >
            <CloseIcon fontSize={isMobile ? "small" : "small"} />
          </IconButton>
        </Box>

        <Box sx={{ py: { xs: 0.5, sm: 1 } }}>
          <Typography
            variant="subtitle1"
            sx={{
              px: { xs: 2, sm: 3 }, // モバイルでは余白を小さく
              py: { xs: 1.5, sm: 2 }, // モバイルでは余白を小さく
              fontWeight: 500,
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
              color: "#222222",
              fontSize: { xs: "1rem", sm: "1.1rem" }, // モバイルでは文字サイズを小さく
              borderBottom: "1px solid hsl(210 80% 92%)",
            }}
          >
            受講生徒
          </Typography>

          <List disablePadding sx={studentListSx}>
            {(isLoading
              ? Array.from(new Array(skeletonCount))
              : participants
            ).map((participant, index) => (
              <ListItem
                key={isLoading ? `skeleton-${index}` : participant.user.id}
                divider
                sx={studentItemSx(isMobile)}
                onClick={() => {
                  window.open(
                    `/profile/${participant.user.id}`,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                {isLoading ? (
                  <Skeleton
                    variant="circular"
                    width={isMobile ? 36 : 44}
                    height={isMobile ? 36 : 44}
                    sx={{ bgcolor: "hsl(210 80% 95%)" }}
                  />
                ) : (
                  <Avatar
                    src={participant.user.image ?? undefined}
                    alt={participant.user.name}
                    sx={{
                      width: isMobile ? 36 : 44,
                      height: isMobile ? 36 : 44,
                      boxShadow:
                        "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
                    }}
                  />
                )}
                <Box sx={studentInfoSx}>
                  {isLoading ? (
                    <>
                      <Skeleton
                        variant="text"
                        width={120}
                        sx={{
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          bgcolor: "#F0F0F0",
                        }}
                      />
                      <Skeleton
                        variant="text"
                        width={80}
                        sx={{
                          fontSize: { xs: "0.8rem", sm: "0.875rem" },
                          bgcolor: "#F0F0F0",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          fontFamily:
                            '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                          color: "#222222",
                          fontSize: { xs: "0.9rem", sm: "0.95rem" }, // モバイルでは文字サイズを小さく
                        }}
                      >
                        {participant.user.name}
                      </Typography>
                      {participant.user.twitterId && (
                        <Box
                          sx={twitterHandleSx}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <TwitterIcon
                            sx={{
                              fontSize: isMobile ? 14 : 16,
                              mr: 0.5,
                              color: "#1DA1F2", // Twitter色はそのまま
                            }}
                          />
                          <Link
                            href={`https://x.com/${participant.user.twitterId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            sx={{
                              color: "hsl(210 100% 45%)",
                              fontWeight: 500,
                              fontSize: { xs: "0.8rem", sm: "0.875rem" }, // モバイルでは文字サイズを小さく
                              transition: "color 0.2s ease",
                              "&:hover": {
                                color: "#1DA1F2",
                              },
                            }}
                          >
                            {participant.user.twitterId}
                          </Link>
                        </Box>
                      )}
                    </>
                  )}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ParticipantsModal;
