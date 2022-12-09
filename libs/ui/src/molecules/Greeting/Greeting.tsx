import { FC } from 'react';

type GreetingProps = {
  greeting: string;
  quote: string;
};

export const Greeting: FC<GreetingProps> = ({ greeting, quote }) => {
  return (
    <div>
      <h1 className="pb-1 text-2xl font-semibold lg:text-3xl">{greeting}</h1>
      <h3 className="text-sm lg:text-base text-zinc-700 max-w-[70ch] dark:text-zinc-400">
        {quote}
      </h3>
    </div>
  );
};
