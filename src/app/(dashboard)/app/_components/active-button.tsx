'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/primitives/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface Props {
  href: string;
  label: string;
  icon: ReactNode;
}

export function ActiveButton({ href, label, icon }: Props) {
  const pathname = usePathname();

  return (
    <Button
      variant="ghost"
      className={cn(
        'w-full justify-start gap-3 font-normal text-foreground-muted hover:text-foreground',
        pathname === href && 'text-foreground',
      )}
      asChild
    >
      <Link href={href}>
        {icon}
        {label}
      </Link>
    </Button>
  );
}
