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
      <Box sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <LoginForm />
      </Box>
    </PageContainer>
  );
};

export default LoginPage;
