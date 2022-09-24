import { FC, useMemo } from 'react';

type GreetingProps = {
  name: string;
  quote: string;
};

export const Greeting: FC<GreetingProps> = ({ name, quote }) => {
  const genGreeting = useMemo(() => {
    const date = new Date();
    const currentHour = date.getHours();

    if (currentHour < 12) {
      return 'Good morning';
    }

    if (currentHour < 18) {
      return 'Good afternoon';
    }

    return 'Good evening';
  }, []);

  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-semibold pb-1">
        {genGreeting}, {name}!
      </h1>
      <h3 className="text-sm lg:text-base text-zinc-700 max-w-[70ch] dark:text-zinc-400">
        {quote}
      </h3>
    </div>
  );
};
