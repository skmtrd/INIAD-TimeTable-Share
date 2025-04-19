import { redirect } from "next/navigation";

export const Home = () => {
  redirect("/login");
};
