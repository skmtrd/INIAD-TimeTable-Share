"use client";

import { authClient } from "@/lib/auth-client";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  async function handleGoogleSignIn() {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/profile",
      });
    } catch (error) {
      console.error(error);
    } finally {
      // biome-ignore lint/suspicious/noConsoleLog: <explanation>
      console.log("sign in completed");
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%",
        maxWidth: "450px",
        mx: "auto",
        px: { xs: 2, sm: 0 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          width: "100%",
          maxWidth: { xs: "100%", sm: 400, md: 450 },
          borderRadius: { xs: "0.5rem", sm: "0.75rem" },
          boxShadow: {
            xs: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            sm: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
          border: "1px solid hsl(240 5.9% 90%)",
          position: "relative",
          zIndex: 1,
          bgcolor: "white",
          mx: "auto",
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4 } }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "hsl(240 6% 10%)",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              mb: { xs: 1, sm: 2 },
              lineHeight: 1.2,
            }}
          >
            INIAD-TimeTable-Share
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "hsl(240 3.8% 46.1%)",
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
              lineHeight: 1.5,
              px: { xs: 1, sm: 0 },
            }}
          >
            アカウントにログインして時間割を共有しましょう
          </Typography>
        </Box>

        <Divider sx={{ my: { xs: 2, sm: 3 } }}>
          <Typography
            variant="body2"
            sx={{
              color: "hsl(240 3.8% 46.1%)",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            ログイン方法
          </Typography>
        </Divider>

        <Button
          variant="contained"
          fullWidth
          size={isMobile ? "medium" : "large"}
          startIcon={isLoading ? undefined : <GoogleIcon />}
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          sx={{
            py: { xs: 1.25, sm: 1.5 },
            mt: { xs: 1, sm: 2 },
            bgcolor: "hsl(240 6% 10%)",
            color: "white",
            borderRadius: "0.5rem",
            textTransform: "none",
            fontWeight: 600,
            fontSize: { xs: "0.875rem", sm: "1rem" },
            "&:hover": {
              bgcolor: "hsl(240 6% 20%)",
            },
            boxShadow:
              "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            minHeight: { xs: "44px", sm: "48px" },
          }}
        >
          {isLoading ? (
            <CircularProgress size={isMobile ? 20 : 24} color="inherit" />
          ) : (
            "Googleでログイン"
          )}
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginForm;
