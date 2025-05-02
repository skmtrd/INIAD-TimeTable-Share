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
} from "@mui/material";
import type React from "react";

// sxプロパティ用のスタイル定義
const modalSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalContentSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: 400,
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

const contentSx: SxProps<Theme> = {
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const iconSx: SxProps<Theme> = {
  fontSize: "48px",
  color: "#000000",
  marginBottom: "16px",
};

const actionsSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  gap: 2,
  padding: "16px 24px 24px",
};

const primaryButtonSx: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: 500,
  padding: "8px 16px",
  bgcolor: "#000000",
  color: "#ffffff",
  borderRadius: "8px",
  "&:hover": {
    bgcolor: "#333333",
  },
};

const secondaryButtonSx: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: 500,
  padding: "8px 16px",
  color: "#666666",
  borderRadius: "8px",
  "&:hover": {
    bgcolor: "#f5f5f5",
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
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="settings-suggestion-title"
      sx={modalSx}
    >
      <Paper sx={modalContentSx}>
        <Box sx={modalHeaderSx}>
          <Typography
            id="settings-suggestion-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 600,
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            }}
          >
            {settingName}の設定
          </Typography>
          <IconButton
            onClick={onClose}
            size="small"
            sx={{
              borderRadius: "8px",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={contentSx}>
          <SettingsIcon sx={iconSx} />
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
          >
            設定する
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default SettingsSuggestionModal;
