import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

const styles = cva(
  [
    'text-zinc-600',
    'dark:text-zinc-400',
    'transition-colors',
    'hover:text-zinc-900',
    'dark:hover:text-zinc-200',
  ],
  {
    variants: {
      active: {
        true: [
          'text-primary-500',
          'dark:text-primary-500',
          'hover:text-primary-700',
          'font-bold',
          'dark:hover:text-primary-700',
        ],
      },
    },
  },
);

type NavLinkProps = {
  readonly href: string;
  readonly children: ReactNode;
  readonly external?: boolean;
};

export const NavLink: FC<NavLinkProps> = ({ href, children, external }) => {
  const router = useRouter();
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={styles({ active: false })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles({ active: router.pathname === href })}>
      {children}
    </Link>
  );
};
