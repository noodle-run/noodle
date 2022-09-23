import Link from 'next/link';
import { ComponentProps, FC, PropsWithChildren, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { FiActivity, FiBook, FiCheck, FiMenu, FiX } from 'react-icons/fi';
import { useMediaQuery } from 'usehooks-ts';
import { Brand } from '../../atoms/Brand';
import { SidebarLink } from '../../molecules/SidebarLink';
import { UserCard } from '../../molecules/UserCard';

type DashboardProps = {
  user: ComponentProps<typeof UserCard>;
};

export const Dashboard: FC<PropsWithChildren<DashboardProps>> = ({
  children,
  user,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // eslint-disable-next-line no-nested-ternary
  const menuHeight = isDesktop ? 'auto' : menuOpen ? 'auto' : 0;

  return (
    <main className="flex flex-col h-screen gap-3 p-3 lg:p-6 lg:flex-row lg:gap-6">
      <nav className="flex flex-col justify-between w-full p-3 lg:w-72 lg:p-6">
        <div>
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-3 px-0 font-extrabold lg:px-3">
                <Brand size={36} />
                Noodle
              </a>
            </Link>
            <div className="flex items-center">
              {!isDesktop && <UserCard {...user} />}
              <button
                data-testid="menu-button"
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
          </div>
          <AnimateHeight
            data-testid={`menu-${menuHeight}`}
            duration={150}
            height={menuHeight}
          >
            <ul className="flex-1 pt-3 lg:pt-6">
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
              <li>
                <SidebarLink
                  href="/dashboard/todos"
                  label="Task list"
                  icon={<FiCheck />}
                />
              </li>
            </ul>
          </AnimateHeight>
        </div>
        {isDesktop && <UserCard {...user} />}
      </nav>
      <div className="flex-1 p-6 rounded-2xl ring-1 dark:ring-zinc-800 ring-zinc-100">
        {children}
      </div>
    </main>
  );
};
