import { forwardRef } from 'react';
import type { LinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { cn } from '@noodle/utils';

type ActiveLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    activeClassName?: string;
  };

const ActiveLink = forwardRef<HTMLAnchorElement, ActiveLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const router = useRouter();
    const active = href === router.pathname;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, active && activeClassName)}
        {...props}
      />
    );
  },
);

ActiveLink.displayName = 'ActiveLink';

export { ActiveLink };
