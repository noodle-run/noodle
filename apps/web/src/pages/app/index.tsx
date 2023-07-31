import { Greeting } from '@/components/Greeting';
import { DashboardLayout } from '@/layouts/dashboard';
import { type NextPageWithLayout } from '@/utils/NextPageWithLayout';

const AppPage: NextPageWithLayout = () => {
  return (
    <main className="flex-1 pt-4">
      <Greeting />
    </main>
  );
};

AppPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AppPage;
