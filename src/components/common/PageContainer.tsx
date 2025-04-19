import type React from "react";

const PageContainer = (props: { children: React.ReactNode }) => (
	<div className="flex flex-col items-center justify-center h-screen">
		{props.children}
	</div>
);

export default PageContainer;
