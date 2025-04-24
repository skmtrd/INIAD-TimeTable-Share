import { userAuthenticationCheck } from "@/app/actions/userAuthenticationCheck";
import ProfilePage from "@/components/domain/(authenticated)/profile/ProfilePage";

const Profile = async () => {
  await userAuthenticationCheck();
  return <ProfilePage />;
};

export default Profile;
