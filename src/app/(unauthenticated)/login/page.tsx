import { UserAuthenticationCheck } from "@/app/actions/isUserAuthenticated";
import PageContainer from "@/components/common/PageContainer";
import LoginForm from "@/components/domain/(unauthenticated)/login/LoginForm";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const isAuthenticated = await UserAuthenticationCheck();
  if (isAuthenticated) redirect("/dashboard");
  return (
    <PageContainer>
      <LoginForm />
    </PageContainer>
  );
};

export default LoginPage;
