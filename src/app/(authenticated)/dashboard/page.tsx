import { userAuthenticationCheck } from "@/app/actions/userAuthenticationCheck";
import DashboardPage from "@/components/domain/(authenticated)/dashboard/DashboardPage";

const Dashboard = async () => {
  await userAuthenticationCheck();
  return <DashboardPage />;
};

export default Dashboard;
