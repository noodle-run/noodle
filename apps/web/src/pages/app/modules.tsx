import { Typography } from '@noodle/ui';

import { DashboardLayout } from '@/layouts/dashboard';
import { type NextPageWithLayout } from '@/utils/NextPageWithLayout';

const ModulesPage: NextPageWithLayout = () => {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="text-center">
        <Typography.H1>😪</Typography.H1>
        <Typography.H1>It&apos;s a bit lonely here</Typography.H1>
        <Typography.P className="max-w-[50ch]">
          We are hard at work getting the dashboard up and running, we are still
          in very much early days of the development of Noodle.
        </Typography.P>
      </div>
    </main>
  );
};

ModulesPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ModulesPage;
