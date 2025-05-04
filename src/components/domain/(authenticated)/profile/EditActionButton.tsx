import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton } from "@mui/material";
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
            }}
          >
            {!props.isUploading && <CloseIcon />}
          </IconButton>
          <Button
            variant="outlined"
            disableElevation
            onClick={props.handleSave}
            sx={{
              borderRadius: "0.5rem",
              textTransform: "none",
              fontWeight: 550,
              color: "222222",
              padding: "6px 16px",
              height: "36px",
            }}
          >
            保存
          </Button>
        </Box>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={props.handleToggleEditMode}
          sx={{
            borderRadius: "0.5rem",
            textTransform: "none",
            fontWeight: 550,
            color: "222222",
            height: "36px",
            padding: "6px 16px",
            "&:hover": {
              boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
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
