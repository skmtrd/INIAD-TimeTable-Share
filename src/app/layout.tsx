import "@/app/globals.css";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "INIAD Timetable Share",
  description: "INIAD Timetable Share",
};

type RootLayoutProps = {
  children: React.ReactNode;
};
const RootLayout: React.FC<RootLayoutProps> = (props) => (
  <html lang="en">
    <body>{props.children}</body>
  </html>
);

export default RootLayout;
