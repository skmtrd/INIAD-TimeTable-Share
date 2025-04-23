import { isUserAuthenticated } from "@/app/actions/isUserAuthenticated";
import ProfilePage from "@/components/domain/(authenticated)/profile/ProfilePage";

const Profile = async () => {
  await isUserAuthenticated();
  return <ProfilePage />;
};

export default Profile;
