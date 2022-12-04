import Link from 'next/link';
import { ComponentProps, FC, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { FiMenu, FiX } from 'react-icons/fi';
import { useMediaQuery } from 'usehooks-ts';
import { Brand } from '../../atoms/Brand';
import { SidebarLink } from '../../molecules/SidebarLink';
import { UserCard } from '../../molecules/UserCard';

type SidebarProps = {
  user: ComponentProps<typeof UserCard>;
  links: ComponentProps<typeof SidebarLink>[];
};

export const Sidebar: FC<SidebarProps> = ({ user, links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // eslint-disable-next-line no-nested-ternary
  const menuHeight = isDesktop ? 'auto' : menuOpen ? 'auto' : 0;
  return (
    <nav className="flex flex-col justify-between w-full p-3 lg:w-72 lg:p-6">
      <div>
        <div className="flex items-center justify-between">
          <Link href="/" legacyBehavior>
            <a className="flex items-center gap-3 px-0 font-extrabold lg:px-3">
              <Brand size={36} />
              <span>Noodle</span>
            </a>
          </Link>
          <div className="flex items-center gap-3">
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
            {links.map((link) => (
              <li key={link.href}>
                <SidebarLink {...link} />
              </li>
            ))}
          </ul>
        </AnimateHeight>
      </div>
      {isDesktop && <UserCard {...user} />}
    </nav>
  );
};
