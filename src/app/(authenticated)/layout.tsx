import { SiteHeader } from "@/components/common/SiteHeader";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <main className="flex min-h-screen flex-col w-full">
//       <SiteHeader />
//       <div className="flex-1">{children}</div>
//     </main>
//   );
// }

type LayoutProps = {
	children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = (props) => (
	<main className="flex min-h-screen flex-col w-full">
		<SiteHeader />
		<div className="flex-1">{props.children}</div>
	</main>
);

export default Layout;
