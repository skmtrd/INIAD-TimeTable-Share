import { UserAuthenticationCheck } from "@/app/actions/isUserAuthenticated";
import ProfilePage from "@/components/domain/(authenticated)/profile/ProfilePage";

const Profile = async () => {
  await UserAuthenticationCheck();
  return <ProfilePage />;
};

export default Profile;
