import Link from 'next/link';
import { FC, PropsWithChildren, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { FiActivity, FiBook, FiMenu, FiX } from 'react-icons/fi';
import { useMediaQuery } from 'usehooks-ts';
import { Brand } from '../../atoms/Brand';
import { SidebarLink } from '../../molecules/SidebarLink';

export const Dashboard: FC<PropsWithChildren> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // eslint-disable-next-line no-nested-ternary
  const menuHeight = isDesktop ? 'auto' : menuOpen ? 'auto' : 0;

  return (
    <main className="flex flex-col min-h-screen gap-3 p-3 lg:p-6 lg:flex-row lg:gap-6">
      <nav className="flex flex-col w-full p-3 lg:w-72 lg:p-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 px-0 font-extrabold lg:px-3">
              <Brand size={36} />
              Noodle
            </a>
          </Link>
          <button
            type="button"
            className="inline-block lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <FiX title="Close menu" size={24} />
            ) : (
              <FiMenu title="Open menu" size={24} />
            )}
          </button>
        </div>
        <AnimateHeight
          data-testid={`menu-${menuHeight}`}
          duration={150}
          height={menuHeight}
        >
          <ul className="pt-3 lg:pt-6">
            <li>
              <SidebarLink
                href="/dashboard"
                label="Today's activity"
                icon={<FiActivity />}
              />
            </li>
            <li>
              <SidebarLink
                href="/dashboard/notebooks"
                label="Notebooks"
                icon={<FiBook />}
              />
            </li>
          </ul>
        </AnimateHeight>
      </nav>
      <div className="flex-1 p-6 rounded-2xl ring-1 dark:ring-zinc-800 ring-zinc-100">
        {children}
      </div>
    </main>
  );
};
