"use client";

import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { authClient } from "@/lib/auth-client";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleGoogleSignIn() {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        width: "100%",
        maxWidth: 400,
        borderRadius: 2,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom fontWeight="bold">
          INIAD-TimeTable-Share
        </Typography>
        <Typography variant="body2" color="text.secondary">
          アカウントにログインして時間割を共有しましょう
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          ログイン方法
        </Typography>
      </Divider>

      <Button
        variant="outlined"
        fullWidth
        size="large"
        startIcon={isLoading ? undefined : <GoogleIcon />}
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        sx={{
          py: 1.5,
          borderColor: "rgba(0, 0, 0, 0.23)",
          color: "text.primary",
          textTransform: "none",
          "&:hover": {
            borderColor: "rgba(0, 0, 0, 0.5)",
            bgcolor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : "Googleでログイン"}
      </Button>

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          ログインすることで、利用規約とプライバシーポリシーに同意したことになります。
        </Typography>
      </Box>
    </Paper>
  );
};

export default LoginForm;
