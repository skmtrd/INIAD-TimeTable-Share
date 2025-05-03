import "@/app/globals.css";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "INIAD Timetable Share",
  description: "INIAD Timetable Share",
  appleWebApp: true,
};

type RootLayoutProps = {
  children: React.ReactNode;
};
const RootLayout: React.FC<RootLayoutProps> = (props) => (
  <html lang="en">
    <head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon512_maskable.png" />
      <meta name="theme-color" content="#ffffff" />
    </head>
    <body>{props.children}</body>
  </html>
);

export default RootLayout;
