import type { FC, PropsWithChildren } from 'react';

import { cn } from '../../utils/cn';

type TypographyH1Props = {
  className?: string;
};

export const TypographyH1: FC<PropsWithChildren<TypographyH1Props>> = ({
  className,
  children,
}) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
    >
      {children}
    </h1>
  );
};
