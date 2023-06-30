import type { FC, PropsWithChildren } from 'react';

import { cn } from '../../utils/cn';

type TypographyH2Props = {
  className?: string;
};

export const TypographyH2: FC<PropsWithChildren<TypographyH2Props>> = ({
  className,
  children,
}) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
        className,
      )}
    >
      {children}
    </h2>
  );
};
