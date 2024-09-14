import React from 'react';
import { cn, withRef } from '@udecode/cn';
import { PlateElement, useElement } from '@udecode/plate-common/react';
import { useLink } from '@udecode/plate-link/react';

import type { TLinkElement } from '@udecode/plate-link';

export const LinkElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    const element = useElement<TLinkElement>();
    const { props: linkProps } = useLink({ element });

    return (
      <PlateElement
        asChild
        className={cn(
          'font-medium text-blue-500 underline decoration-blue-500 underline-offset-4',
          className,
        )}
        ref={ref}
        {...(linkProps as Record<string, unknown>)}
        {...props}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>{children}</a>
      </PlateElement>
    );
  },
);
