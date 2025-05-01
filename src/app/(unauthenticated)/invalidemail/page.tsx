"use client";

import PageContainer from "@/components/common/PageContainer";
import { authClient } from "@/lib/auth-client";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
const InvalidEmailPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSignOut = async () => {
    setIsLoading(true);
    if (isLoading) return;
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
        },
      },
    });
    setIsLoading(false);
  };

  return (
    <PageContainer>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" align="center">
          ご利用のメールアドレスはこのサイトでは利用できません
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ mb: 2 }} align="center">
            別のアカウントでログインするには、一度ログアウトしてください。
          </Typography>
          <button
            type="submit"
            onClick={handleSignOut}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            ログアウト
          </button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default InvalidEmailPage;
