import { Balancer } from 'react-wrap-balancer';
import type { FC, PropsWithChildren } from 'react';

import { Button, ErrorPanel, Skeleton, Typography } from '@noodle/ui';

import { Greeting } from '@/components/Greeting';
import { Icon } from '@/components/Icon';
import { DashboardLayout } from '@/layouts/dashboard';
import { api } from '@/utils/api';
import { type NextPageWithLayout } from '@/utils/NextPageWithLayout';

const EmptyPageOrChildren: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading, error } = api.module.get.all.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div>
        <Skeleton className="h-36 w-full" />
      </div>
    );
  }

  if (error) {
    return <ErrorPanel errorMessage={error.message} />;
  }

  if (data.length === 0) {
    return (
      <div className="border-gray-4 dark:border-graydark-4 mb-2 mt-8 flex flex-1 flex-col items-center justify-center space-y-3 rounded-xl border p-6 text-center">
        <div className="bg-gray-3 dark:bg-graydark-3 border-gray-6 dark:border-graydark-6 text-gray-11 dark:text-graydark-11 mb-3 rounded-xl border p-3">
          <Icon name="puzzle" size={32} />
        </div>
        <Typography.H3>No Modules Yet</Typography.H3>
        <Typography.P className="max-w-[80ch] pb-3">
          <Balancer>
            Modules are the building blocks of everything in Noodle, it&apos;s
            where you organise and put all your material like notebooks and
            flashcards.
          </Balancer>
        </Typography.P>

        <Button variant="secondary" className="gap-3">
          <Icon name="plus" size={16} />
          Create a Module
        </Button>

        <div className="h-12 md:h-16 lg:h-24 xl:h-36" />
      </div>
    );
  }

  return children;
};

const AppPage: NextPageWithLayout = () => {
  return (
    <main className="flex flex-1 flex-col pt-4">
      <Greeting />

      <EmptyPageOrChildren>Hello there</EmptyPageOrChildren>
    </main>
  );
};

AppPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AppPage;
