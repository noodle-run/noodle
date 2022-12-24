import { FC } from 'react';

type GreetingProps = {
  greeting?: string;
  quote?: string;
  isLoading: boolean;
};

export const Greeting: FC<GreetingProps> = ({ greeting, quote, isLoading }) => {
  if (isLoading) {
    return (
      <div role="status" className="h-[88px] w-[70ch]">
        <div className="flex h-full animate-pulse flex-col gap-[8px]">
          <div className="h-[32px] w-2/3 rounded bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-[48px] w-full rounded bg-zinc-100 dark:bg-zinc-800" />
        </div>
      </div>
    );
  }

  if (greeting && quote) {
    return (
      <div>
        <h1 className="pb-1 text-2xl font-semibold lg:text-3xl">{greeting}</h1>
        <h3 className="max-w-[70ch] text-sm text-zinc-700 dark:text-zinc-400 lg:text-base">
          {quote}
        </h3>
      </div>
    );
  }

  return null;
};
