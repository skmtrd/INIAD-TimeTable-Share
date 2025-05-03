import { auth } from "@/auth";
import PageContainer from "@/components/common/PageContainer";
import LoginForm from "@/components/domain/(unauthenticated)/login/LoginForm";
import { Box } from "@mui/material";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (session) redirect("/dashboard");

  return (
    <PageContainer>
      <Box
        sx={{
          minHeight: "100dvh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 4, sm: 6 },
          px: { xs: 2, sm: 3, md: 4 },
          overflow: "hidden",
          position: "relative",
          bgcolor: "white", // 白背景に変更
        }}
      >
        {/* 装飾要素 - 右上 */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "20%", sm: "25%" },
            right: { xs: "10%", sm: "20%" },
            width: { xs: 120, sm: 160 },
            height: { xs: 120, sm: 160 },
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, hsla(210, 100%, 80%, 0.3), hsla(240, 100%, 80%, 0.3))",
            zIndex: 0,
          }}
        />

        {/* 装飾要素 - 左下 */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "20%", sm: "25%" },
            left: { xs: "10%", sm: "20%" },
            width: { xs: 150, sm: 200 },
            height: { xs: 150, sm: 200 },
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, hsla(210, 100%, 80%, 0.2), hsla(240, 100%, 80%, 0.2))",
            zIndex: 0,
          }}
        />

        <LoginForm />
      </Box>
    </PageContainer>
  );
};

export default LoginPage;
