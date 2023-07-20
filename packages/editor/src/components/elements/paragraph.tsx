import type { PlateElementProps } from '@udecode/plate';
import { PlateElement } from '@udecode/plate';

import { cn } from '@noodle/utils';

export const ParagraphElement = ({
  className,
  children,
  ...props
}: PlateElementProps) => {
  return (
    <PlateElement
      asChild
      className={cn('text-gray-11 dark:text-graydark-11 leading-7', className)}
      {...props}
    >
      <p>{children}</p>
    </PlateElement>
  );
};
