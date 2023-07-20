import type { FC, PropsWithChildren } from 'react';

import { cn } from '@noodle/utils';

type TypographyProps = {
  className?: string;
};

const H1: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-5xl font-extrabold tracking-tighter lg:text-6xl',
        className,
      )}
    >
      {children}
    </h1>
  );
};

const H2: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tighter lg:text-5xl',
        className,
      )}
    >
      {children}
    </h2>
  );
};

const H3: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
}) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl',
        className,
      )}
    >
      {children}
    </h3>
  );
};

const H4: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
}) => {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl',
        className,
      )}
    >
      {children}
    </h4>
  );
};

const P: FC<PropsWithChildren<TypographyProps>> = ({ children, className }) => {
  return (
    <p
      className={cn(
        'text-gray-11 dark:text-graydark-11 leading-6 tracking-tight [&:not(:first-child)]:mt-6',
        className,
      )}
    >
      {children}
    </p>
  );
};

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  P,
};
