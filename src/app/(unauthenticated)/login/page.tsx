import { auth } from "@/auth";
import PageContainer from "@/components/common/PageContainer";
import LoginForm from "@/components/domain/(unauthenticated)/login/LoginForm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (session) redirect("/dashboard");

  return (
    <PageContainer>
      <LoginForm />
    </PageContainer>
  );
};

export default LoginPage;
