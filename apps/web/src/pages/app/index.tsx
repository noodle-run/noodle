import { DashboardPanel } from '@/components/DashboardPanel';
import { Greeting } from '@/components/Greeting';
import { RecentModules } from '@/components/RecentModules';
import { DashboardLayout } from '@/layouts/dashboard';
import { type NextPageWithLayout } from '@/utils/NextPageWithLayout';

const AppPage: NextPageWithLayout = () => {
  return (
    <main className="grid h-full w-full grid-cols-[1fr_300px] gap-8 pt-4">
      <div className="flex flex-col gap-6 overflow-hidden pb-2">
        <Greeting />
        <RecentModules />
      </div>
      <DashboardPanel />
    </main>
  );
};

AppPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AppPage;
