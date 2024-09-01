import { api } from '@/lib/trpc/server';
import { RecentModules } from './_components/recent-modules';
import { WelcomeMessage } from './_components/welcome-message';

export default async function DashboardHome() {
  const modules = await api.modules.getUserModules();

  return (
    <div className="flex flex-1 gap-6">
      <div className="flex-1">
        <WelcomeMessage />
        <RecentModules modules={modules.slice(0, 4)} />
      </div>
      <div className="min-w-[280px] rounded-lg border p-4">Right side</div>
    </div>
  );
}
