import { type FC } from 'react';
import format from 'date-fns/format';

import { Typography } from '@noodle/ui';

import { TaskSkeleton } from './TaskSkeleton';
import { WeatherData } from './WeatherData';

export const DashboardPanel: FC = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "eeee, 'the' do 'of' MMMM yyyy");

  return (
    <div className="overflow-hidden pb-2">
      <div className="border-gray-4 dark:border-graydark-4 flex h-full flex-col gap-2 rounded-xl border p-4">
        <span className="text-gray-11 dark:text-graydark-11 text-xs xl:text-sm">
          It&apos;s
        </span>
        <h3 className="text-amber-9 dark:text-amberdark-9 text-sm font-semibold xl:text-base">
          {formattedDate}
        </h3>
        <WeatherData />
        <Typography.P as="h3" className="mt-4 text-sm">
          <span className="pr-2">📌</span>Tasks for today
        </Typography.P>
        <div className="relative overflow-hidden pt-3">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center px-12">
            <Typography.P className="text-gray-8 dark:text-graydark-8 text-center text-sm">
              Really? No tasks for the day? Come on now...
            </Typography.P>
          </div>
          <div className="flex flex-col gap-4 pr-4">
            {Array.from(Array(12).keys()).map((_, i) => (
              <TaskSkeleton variant="empty" key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
