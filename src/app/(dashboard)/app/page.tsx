import { api } from '@/lib/trpc/server';
import { RecentModules } from './_components/recent-modules';
import { WelcomeMessage } from './_components/welcome-message';
import { WeatherData } from './_components/weather';

export default async function DashboardHome() {
  const modules = await api.modules.getUserModules();

  return (
    <div className="flex flex-1 flex-col gap-6 md:flex-row">
      <div className="flex-1">
        <WelcomeMessage />
        <RecentModules modules={modules.slice(0, 4)} />
      </div>
      <div className="min-w-[280px] rounded-lg border p-4">
        <WeatherData />
      </div>
    </div>
  );
}
