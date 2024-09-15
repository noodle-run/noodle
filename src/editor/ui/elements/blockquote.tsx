'use client';

import React from 'react';

import { cn, withRef } from '@udecode/cn';
import { PlateElement } from '@udecode/plate-common/react';

export const BlockquoteElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    return (
      <PlateElement
        asChild
        className={cn(
          'relative my-2 block rounded-lg border bg-gray-subtle px-4 py-2 italic leading-7 text-foreground-muted',
          className,
        )}
        ref={ref}
        {...props}
      >
        <blockquote>{children}</blockquote>
      </PlateElement>
    );
  },
);
