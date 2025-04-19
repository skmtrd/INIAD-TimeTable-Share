import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SiteHeader } from '@/components/common/SiteHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <main className="flex min-h-screen flex-col w-full">
        <SiteHeader />
        <div className="flex-1">{children}</div>
      </main>
    </SidebarProvider>
  );
}
