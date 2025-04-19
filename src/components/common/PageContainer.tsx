import type React from "react";

const PageContainer = (props: { children: React.ReactNode }) => (
  <div className="flex h-screen flex-col items-center justify-center">
    {props.children}
  </div>
);

export default PageContainer;
