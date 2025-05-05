import { SiteHeader } from "@/components/common/SiteHeader";
import type React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = (props) => (
  <main className="min-h-screen w-full flex-col bg-[#edf2f7]">
    <SiteHeader />
    {props.children}
  </main>
);

export default Layout;
