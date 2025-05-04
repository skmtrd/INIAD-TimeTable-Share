import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, CircularProgress, IconButton } from "@mui/material";
import type React from "react";

type EditActionButtonProps = {
  isEditMode: boolean;
  isUploading: boolean;
  handleToggleEditMode: () => void;
  handleSave: () => void;
};

const EditActionButton: React.FC<EditActionButtonProps> = (props) => {
  return (
    <>
      {props.isEditMode ? (
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            onClick={props.handleToggleEditMode}
            size="small"
            sx={{
              color: "#f44336",
              backgroundColor: "rgba(244, 67, 54, 0.1)",
              "&:hover": {
                backgroundColor: "rgba(244, 67, 54, 0.2)",
              },
            }}
          >
            {!props.isUploading && <CloseIcon />}
          </IconButton>
          <Button
            variant="contained"
            disableElevation
            startIcon={
              props.isUploading ? <CircularProgress size={18} /> : <EditIcon />
            }
            onClick={props.handleSave}
            sx={{
              borderRadius: "0.5rem",
              textTransform: "none",
              fontWeight: 500,
              backgroundColor: "#2979ff",
              color: "white",
              padding: "6px 16px",
              height: "36px",
              "&:hover": {
                backgroundColor: "#1c54b2",
              },
            }}
          >
            保存
          </Button>
        </Box>
      ) : (
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={props.handleToggleEditMode}
          sx={{
            borderRadius: "0.5rem",
            textTransform: "none",
            fontWeight: 500,
            borderColor: "#2979ff",
            color: "white",
            backgroundColor: "#2979ff",
            height: "36px",
            padding: "6px 16px",
            "&:hover": {
              backgroundColor: "rgba(41, 121, 255, 0.1)",
              borderColor: "#2979ff",
            },
          }}
        >
          編集
        </Button>
      )}
    </>
  );
};

export default EditActionButton;
