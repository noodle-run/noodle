import { FC } from 'react';

type GreetingProps = {
  greeting?: string;
  quote?: string;
  isLoading: boolean;
};

export const Greeting: FC<GreetingProps> = ({ greeting, quote, isLoading }) => {
  if (isLoading) {
    return (
      <div role="status" className="w-[70ch] h-[88px]">
        <div className="flex flex-col gap-[8px] animate-pulse h-full">
          <div className="w-2/3 h-[32px] dark:bg-zinc-800 bg-zinc-100 rounded" />
          <div className="w-full h-[48px] dark:bg-zinc-800 bg-zinc-100 rounded" />
        </div>
      </div>
    );
  }

  if (greeting && quote) {
    return (
      <div>
        <h1 className="pb-1 text-2xl font-semibold lg:text-3xl">{greeting}</h1>
        <h3 className="text-sm lg:text-base text-zinc-700 max-w-[70ch] dark:text-zinc-400">
          {quote}
        </h3>
      </div>
    );
  }

  return null;
};
