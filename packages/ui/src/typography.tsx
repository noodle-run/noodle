import type { FC, PropsWithChildren } from 'react';

import { cn } from '@noodle/utils';

type TypographyProps = {
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
};

const H1: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
  as = 'h1',
}) => {
  const As = as;
  return (
    <As
      className={cn(
        'scroll-m-20 text-5xl font-extrabold tracking-tighter lg:text-6xl',
        className,
      )}
    >
      {children}
    </As>
  );
};

const H2: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
  as = 'h2',
}) => {
  const As = as;
  return (
    <As
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tighter lg:text-5xl',
        className,
      )}
    >
      {children}
    </As>
  );
};

const H3: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
  as = 'h3',
}) => {
  const As = as;
  return (
    <As
      className={cn(
        'scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl',
        className,
      )}
    >
      {children}
    </As>
  );
};

const H4: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
  as = 'h4',
}) => {
  const As = as;
  return (
    <As
      className={cn(
        'scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl',
        className,
      )}
    >
      {children}
    </As>
  );
};

const P: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
  as = 'p',
}) => {
  const As = as;
  return (
    <As
      className={cn(
        'text-gray-11 dark:text-graydark-11 leading-7 tracking-tight',
        className,
      )}
    >
      {children}
    </As>
  );
};

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  P,
};
