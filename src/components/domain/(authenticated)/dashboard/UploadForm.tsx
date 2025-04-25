import UploadIcon from "@mui/icons-material/Upload";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import type React from "react";

type UploadFormProps = {
  file: File | null;
  isUploading: boolean;
  message: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpload: () => void;
  openFileDialog: () => void;
};

const UploadForm: React.FC<UploadFormProps> = (props) => {
  return (
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
        onClick={props.openFileDialog}
      >
        <input
          type="file"
          ref={props.fileInputRef}
          style={{ display: "none" }}
          accept={".json"}
          onChange={props.handleFileChange}
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
          {props.file ? props.file.name : "ファイルを選択"}
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
        onClick={props.handleUpload}
        disabled={!props.file || props.isUploading}
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
        {props.isUploading && (
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
          {props.message}
        </Box>
      </Button>
    </Box>
  );
};

export default UploadForm;
