import type { FC, PropsWithChildren } from 'react';

import { cn } from '../../utils/cn';

type TypographyH3Props = {
  className?: string;
};

export const TypographyH3: FC<PropsWithChildren<TypographyH3Props>> = ({
  className,
  children,
}) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
    >
      {children}
    </h3>
  );
};
