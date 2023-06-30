import type { FC, PropsWithChildren } from 'react';

import { cn } from '../../utils/cn';

type TypographyH4Props = {
  className?: string;
};

export const TypographyH4: FC<PropsWithChildren<TypographyH4Props>> = ({
  className,
  children,
}) => {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
    >
      {children}
    </h4>
  );
};
