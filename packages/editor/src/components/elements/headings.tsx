import type { PlateElementProps } from '@udecode/plate';
import { PlateElement } from '@udecode/plate';

import { cn } from '@noodle/utils';

const HeadingH1Element = ({
  className,
  children,
  ...props
}: PlateElementProps) => {
  return (
    <PlateElement
      asChild
      className={cn(
        'text-gray-12 dark:text-graydark-12 mb-4 mt-12 text-4xl font-semibold leading-7',
        className,
      )}
      {...props}
    >
      <h1>{children}</h1>
    </PlateElement>
  );
};

const HeadingH2Element = ({
  className,
  children,
  ...props
}: PlateElementProps) => {
  return (
    <PlateElement
      asChild
      className={cn(
        'text-gray-12 dark:text-graydark-12 mb-4 mt-11 text-3xl font-semibold leading-7',
        className,
      )}
      {...props}
    >
      <h2>{children}</h2>
    </PlateElement>
  );
};

const HeadingH3Element = ({
  className,
  children,
  ...props
}: PlateElementProps) => {
  return (
    <PlateElement
      asChild
      className={cn(
        'text-gray-12 dark:text-graydark-12 mb-4 mt-10 text-2xl font-semibold leading-7',
        className,
      )}
      {...props}
    >
      <h3>{children}</h3>
    </PlateElement>
  );
};

const HeadingH4Element = ({
  className,
  children,
  ...props
}: PlateElementProps) => {
  return (
    <PlateElement
      asChild
      className={cn(
        'text-gray-11 dark:text-graydark-11 mb-2 mt-9 text-xl font-semibold leading-7 underline underline-offset-4',
        className,
      )}
      {...props}
    >
      <h4>{children}</h4>
    </PlateElement>
  );
};

export {
  HeadingH1Element,
  HeadingH2Element,
  HeadingH3Element,
  HeadingH4Element,
};
