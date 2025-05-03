import type { Theme } from "@emotion/react";
import { Close as CloseIcon } from "@mui/icons-material";
import { Settings as SettingsIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  type SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type React from "react";

// sxプロパティ用のスタイル定義
const modalSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(5px)",
  p: { xs: 2, sm: 3 }, // モバイルでは余白を追加
};

const modalContentSx = (isMobile: boolean): SxProps<Theme> => ({
  width: "100%",
  maxWidth: isMobile ? "calc(100% - 24px)" : 400,
  outline: "none",
  boxShadow:
    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
  borderRadius: isMobile ? "12px" : "16px",
  bgcolor: "#ffffff",
  border: "1px solid hsl(210 30% 92%)",
  overflow: "hidden",
});

const modalHeaderSx = (isMobile: boolean): SxProps<Theme> => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: isMobile ? "14px 16px" : "18px 24px",
  borderBottom: "1px solid hsl(210 30% 92%)",
  background: "linear-gradient(to right, hsl(210 30% 98%), hsl(210 30% 95%))",
});

const contentSx: SxProps<Theme> = {
  padding: { xs: "20px", sm: "24px" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const iconSx: SxProps<Theme> = {
  fontSize: { xs: "40px", sm: "48px" },
  color: "hsl(210 60% 50%)",
  marginBottom: { xs: "12px", sm: "16px" },
  backgroundColor: "hsl(210 50% 95%)",
  padding: "12px",
  borderRadius: "50%",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
};

const actionsSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  gap: 2,
  padding: { xs: "12px 16px 20px", sm: "16px 24px 24px" },
};

const primaryButtonSx: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: 600,
  padding: "8px 20px",
  bgcolor: "hsl(210 100% 50%)",
  color: "#ffffff",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  boxShadow: "0 2px 5px rgba(0, 120, 255, 0.2)",
  "&:hover": {
    bgcolor: "hsl(210 100% 45%)",
    boxShadow: "0 3px 8px rgba(0, 120, 255, 0.3)",
    transform: "translateY(-1px)",
  },
};

const secondaryButtonSx: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: 500,
  padding: "8px 16px",
  color: "hsl(210 30% 40%)",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  "&:hover": {
    bgcolor: "hsl(210 30% 95%)",
  },
};

const closeButtonSx: SxProps<Theme> = {
  borderRadius: "8px",
  color: "hsl(210 40% 45%)",
  transition: "all 0.2s ease",
  padding: { xs: "4px", sm: "8px" },
  "&:hover": {
    bgcolor: "hsl(210 30% 90%)",
    color: "hsl(210 60% 40%)",
  },
};

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// モーダルコンポーネントのプロップス
interface SettingsSuggestionModalProps {
  open: boolean;
  onClose: () => void;
  onConfigure: () => void;
  settingName: string;
  description: string;
}

// 設定提案モーダルコンポーネント
const SettingsSuggestionModal: React.FC<SettingsSuggestionModalProps> = ({
  open,
  onClose,
  onConfigure,
  settingName,
  description,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="settings-suggestion-title"
      sx={modalSx}
    >
      <Paper sx={modalContentSx(isMobile)} elevation={0}>
        <Box sx={modalHeaderSx(isMobile)}>
          <Typography
            id="settings-suggestion-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 600,
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
              color: "hsl(210 40% 35%)",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              letterSpacing: "-0.01em",
            }}
          >
            {settingName}の設定
          </Typography>
          <IconButton
            onClick={onClose}
            size={isMobile ? "small" : "medium"}
            sx={closeButtonSx}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box sx={contentSx}>
          <SettingsIcon sx={iconSx} />
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
              color: "hsl(210 30% 30%)",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
              color: "hsl(210 30% 50%)",
              fontSize: { xs: "0.85rem", sm: "0.9rem" },
            }}
          >
            今すぐ設定しますか？
          </Typography>
        </Box>

        <Box sx={actionsSx}>
          <Button variant="text" onClick={onClose} sx={secondaryButtonSx}>
            後で
          </Button>
          <Button
            variant="contained"
            onClick={onConfigure}
            sx={primaryButtonSx}
            disableElevation
          >
            設定する
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default SettingsSuggestionModal;
