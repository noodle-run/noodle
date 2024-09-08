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
          'relative my-2 inline-block rounded-xl border bg-gray-subtle px-5 py-4 italic leading-7 text-foreground-muted',
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
