import { useUser } from '@clerk/nextjs';
import router from 'next/router';

import { DashboardPanel } from '@/components/DashboardPanel';
import { WaitListTable } from '@/components/WaitListTable';
import { DashboardLayout } from '@/layouts/dashboard';
import { type NextPageWithLayout } from '@/utils/NextPageWithLayout';

const WaitListPage: NextPageWithLayout = () => {
  const { user, isLoaded } = useUser();
  const userMetadata = user?.publicMetadata;

  if (!isLoaded) {
    return <></>;
  }

  if (userMetadata?.['role'] !== 'ADMIN') {
    void router.push('/app');
  }

  return (
    <main className="grid h-full w-full grid-cols-[1fr_300px] gap-8 pt-4">
      <div className="flex flex-col gap-6 overflow-hidden pb-2">
        <WaitListTable />
      </div>
      <DashboardPanel />
    </main>
  );
};

WaitListPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default WaitListPage;
