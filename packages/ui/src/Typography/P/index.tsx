import type { FC, PropsWithChildren } from 'react';

import { cn } from '../../utils/cn';

type TypographyPProps = {
  className?: string;
};

export const TypographyP: FC<PropsWithChildren<TypographyPProps>> = ({
  className,
  children,
}) => {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  );
};
