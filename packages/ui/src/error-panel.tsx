import { type FC } from 'react';
import { AlertTriangle } from 'lucide-react';

import { cn } from '@noodle/utils';

import { Typography } from './typography';

type ErrorPanelProps = {
  errorMessage: string;
  className?: string;
};

const ErrorPanel: FC<ErrorPanelProps> = ({ errorMessage, className }) => {
  return (
    <div
      className={cn(
        'relative flex h-36 w-full items-center justify-center',
        className,
      )}
    >
      <div className="bg-red-4 dark:bg-reddark-1 border-red-6 dark:border-reddark-6 absolute left-0 top-0 z-0 h-full w-full animate-pulse rounded-xl border" />
      <div className="z-10 flex flex-col space-y-4">
        <Typography.P
          as="h1"
          className="text-red-10 dark:text-reddark-10 flex items-center gap-4 text-lg"
        >
          <AlertTriangle size={20} strokeWidth={1.5} /> Error: {errorMessage}
          message
        </Typography.P>
      </div>
    </div>
  );
};

export { ErrorPanel };
