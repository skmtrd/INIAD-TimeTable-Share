"use server";

import { userAuthenticationCheck } from "@/app/actions/userAuthenticationCheck";
import AuthCheckPage from "@/components/domain/(authenticated)/profile/AuthCheckPage";

const Profile = async () => {
  const user = await userAuthenticationCheck();
  return <AuthCheckPage user={user} />;
};

export default Profile;
