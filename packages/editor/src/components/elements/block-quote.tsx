import type { PlateElementProps } from '@udecode/plate';
import { PlateElement } from '@udecode/plate';

import { cn } from '@noodle/utils';

const BlockquoteElement = ({
  className,
  children,
  ...props
}: PlateElementProps) => {
  return (
    <PlateElement
      asChild
      className={cn(
        'bg-primary-900/5 text-primary-50/90 border-primary-900/25 my-4 rounded-lg border px-6 py-4 leading-7',
        className,
      )}
      {...props}
    >
      <blockquote>{children}</blockquote>
    </PlateElement>
  );
};

export { BlockquoteElement };
