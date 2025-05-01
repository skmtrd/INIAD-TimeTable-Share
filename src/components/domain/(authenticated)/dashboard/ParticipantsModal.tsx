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
} from "@mui/material";
import type React from "react";

// スタイル定義
const modalSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalContentSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: 500,
  maxHeight: "80vh",
  overflow: "auto",
  outline: "none",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
  borderRadius: "12px",
  bgcolor: "#ffffff",
};

const modalHeaderSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  borderBottom: "1px solid #f0f0f0",
};

const studentListSx: SxProps<Theme> = {
  maxHeight: "400px", // 5人程度が表示される高さ
  overflow: "auto",
};

const studentItemSx: SxProps<Theme> = {
  display: "flex",
  padding: "12px 24px",
  "&:hover": {
    backgroundColor: "#f9f9f9",
  },
};

const studentInfoSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  marginLeft: 2,
};

const twitterHandleSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  color: "#536471",
  fontSize: "0.875rem",
  marginTop: 0.2,
};

type ParticipantsModalProps = {
  isOpen: boolean;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  lectureId: string;
  lectureName: string;
};

const ParticipantsModal: React.FC<ParticipantsModalProps> = (props) => {
  const { participants } = useParticipantsSWR(props.lectureId);
  const isLoading = participants === undefined;
  const skeletonCount = 5;

  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="class-modal-title"
      sx={modalSx}
    >
      <Paper sx={modalContentSx}>
        <Box sx={modalHeaderSx}>
          <Typography
            id="class-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 600,
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            }}
          >
            {props.lectureName}
          </Typography>
          <IconButton
            onClick={props.handleClose}
            size="small"
            sx={{
              borderRadius: "8px",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ py: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              px: 3,
              py: 2,
              fontWeight: 500,
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
                sx={studentItemSx}
                onClick={() => {
                  window.open(
                    `/profile/${participant.user.id}`,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                {isLoading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <Avatar
                    src={participant.user.image ?? undefined}
                    alt={participant.user.name}
                  />
                )}
                <Box sx={studentInfoSx}>
                  {isLoading ? (
                    <>
                      <Skeleton
                        variant="text"
                        width={120}
                        sx={{ fontSize: "1rem" }}
                      />
                      <Skeleton
                        variant="text"
                        width={80}
                        sx={{ fontSize: "0.875rem" }}
                      />
                    </>
                  ) : (
                    <>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          fontFamily:
                            '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                      >
                        {participant.user.name}
                      </Typography>
                      {participant.user.twitterId && (
                        <Box sx={twitterHandleSx}>
                          <TwitterIcon
                            sx={{ fontSize: 16, mr: 0.5, color: "#1DA1F2" }}
                          />
                          <Link
                            href={`https://x.com/${participant.user.twitterId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
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
