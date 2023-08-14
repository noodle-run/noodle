import format from 'date-fns/format';

import { Button, Skeleton, Typography } from '@noodle/ui';

import { Greeting } from '@/components/Greeting';
import { useFetchWeatherDataQuery } from '@/fetchers/weather';
import { DashboardLayout } from '@/layouts/dashboard';
import { getFormattedWeatherDescription } from '@/utils/getFormattedWeatherCondition';
import { type NextPageWithLayout } from '@/utils/NextPageWithLayout';

const ModuleEmptyCards = () => {
  return (
    <div className="bg-gray-2/50 dark:bg-graydark-2/50 border-gray-2 dark:border-graydark-2 flex h-[176px] shrink-0 grow-0 basis-[253px] flex-col gap-3 rounded-xl border p-4">
      <div className="bg-gray-2 dark:bg-graydark-2 h-6 w-6 rounded-lg" />
      <div className="bg-gray-2 dark:bg-graydark-2 h-4 w-full rounded-lg" />
      <div className="bg-gray-2 dark:bg-graydark-2 h-4 w-16 rounded-lg" />
      <div className="bg-gray-2 dark:bg-graydark-2 mt-3 h-4 w-24 rounded-lg" />
      <div className="bg-gray-2 dark:bg-graydark-2 h-4 w-full rounded-lg" />
    </div>
  );
};

const EmptyTaskPlaceholder = () => {
  return (
    <div className="flex gap-4 opacity-25">
      <div>
        <Skeleton className="h-5 w-5 animate-none" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <Skeleton className="h-4 w-full animate-none" />
        <Skeleton className="h-4 w-20 animate-none" />
        <Skeleton className="h-4 w-10 animate-none" />
      </div>
    </div>
  );
};

const RecentModules = () => {
  return (
    <div className="border-gray-4 dark:border-graydark-4 flex flex-col gap-4 rounded-xl border p-4">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold">Recently visited modules</h3>
        <Button variant="secondary" size="icon" className="px-2 py-1 text-xs">
          Hide
        </Button>
      </div>
      <div className="overflow-hidden">
        <div className="relative flex w-full gap-4">
          <div className="absolute flex h-full w-full items-center justify-center">
            <span className="text-gray-8 dark:text-graydark-8 max-w-[35ch] text-center text-sm">
              When you decide to become a good student, the recent modules will
              appear here
            </span>
          </div>
          <ModuleEmptyCards />
          <ModuleEmptyCards />
          <ModuleEmptyCards />
          <ModuleEmptyCards />
        </div>
      </div>
    </div>
  );
};

const AppPage: NextPageWithLayout = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "eeee, 'the' do 'of' MMMM yyyy");

  const { data: weatherData } = useFetchWeatherDataQuery();

  return (
    <main className="grid h-full w-full grid-cols-[1fr_300px] gap-8 pt-4">
      <div className="flex flex-col gap-6 overflow-hidden pb-2">
        <Greeting />
        <RecentModules />
      </div>
      <div className="overflow-hidden pb-2">
        <div className="border-gray-4 dark:border-graydark-4 flex h-full flex-col gap-2 rounded-xl border p-4">
          <span className="text-gray-11 dark:text-graydark-11 text-xs">
            It&apos;s
          </span>
          <h3 className="text-amber-9 dark:text-amberdark-9 text-sm font-semibold">
            {formattedDate}
          </h3>
          {weatherData && (
            <span className="text-gray-11 dark:text-graydark-11 text-xs leading-5">
              You can expect a 👆 high of {weatherData.main.temp_max.toFixed()}º
              and a 👇 low of {weatherData.main.temp_min.toFixed()}º with{' '}
              {getFormattedWeatherDescription(
                weatherData.weather[0]?.description,
              )}{' '}
              today.
            </span>
          )}
          <Typography.P as="h3" className="mt-6 text-sm">
            <span className="pr-2">📌</span>Tasks for today
          </Typography.P>
          <div className="relative overflow-hidden pt-3">
            <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center px-12">
              <Typography.P className="text-gray-8 dark:text-graydark-8 text-center text-sm">
                Really? No tasks for the day? Come on now...
              </Typography.P>
            </div>
            <div className="flex flex-col gap-4 pr-4">
              {Array.from(Array(10).keys()).map((_, i) => (
                <EmptyTaskPlaceholder key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

AppPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AppPage;
