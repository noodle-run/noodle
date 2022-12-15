import { FC } from 'react';

type GreetingProps = {
  greeting?: string;
  quote?: string;
  isLoading: boolean;
};

export const Greeting: FC<GreetingProps> = ({ greeting, quote, isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-60 h-24 border-2 rounded-md mx-auto mt-20">
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="w-12 bg-gray-300 h-12 rounded-full " />
          <div className="flex flex-col space-y-3">
            <div className="w-36 bg-gray-300 h-6 rounded-md " />
            <div className="w-24 bg-gray-300 h-6 rounded-md " />
          </div>
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
