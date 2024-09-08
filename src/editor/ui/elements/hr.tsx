import type { PropsWithChildren } from 'react';
import React from 'react';

import { cn, withRef } from '@udecode/cn';
import { PlateElement } from '@udecode/plate-common/react';
import { useFocused, useSelected } from 'slate-react';

export const HrElement = withRef<typeof PlateElement, PropsWithChildren>(
  ({ className, nodeProps, ...props }, ref) => {
    const { children } = props;

    const selected = useSelected();
    const focused = useFocused();

    return (
      <PlateElement ref={ref} {...props}>
        <div className="py-6" contentEditable={false}>
          <hr
            {...nodeProps}
            className={cn(
              'h-0.5 cursor-pointer rounded-sm border-none bg-gray-element bg-clip-content',
              selected && focused && 'ring-2 ring-gray-element-active',
              className,
            )}
          />
        </div>
        {children}
      </PlateElement>
    );
  },
);
