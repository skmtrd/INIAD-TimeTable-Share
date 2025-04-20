import { SiteHeader } from "@/components/common/SiteHeader";
import type React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = (props) => (
  <main className="flex min-h-screen w-full flex-col">
    <SiteHeader />
    <div className="flex-1">{props.children}</div>
  </main>
);

export default Layout;
