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
            color="error"
          >
            {!props.isUploading && <CloseIcon />}
          </IconButton>
          <Button
            variant="outlined"
            startIcon={
              props.isUploading ? <CircularProgress size={18} /> : <EditIcon />
            }
            onClick={props.handleSave}
            color="primary"
            sx={{
              borderRadius: "0.5rem",
              textTransform: "none",
              fontWeight: 500,
              borderColor: "hsl(240 5.9% 90%)",
              height: "36px",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            保存
          </Button>
        </Box>
      ) : (
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={props.handleToggleEditMode}
          color="primary"
          sx={{
            borderRadius: "0.5rem",
            textTransform: "none",
            fontWeight: 500,
            borderColor: "hsl(240 5.9% 90%)",
            color: "hsl(240 6% 10%)",
            height: "36px",
            "&:hover": {
              opacity: 0.8,
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
