import Link from 'next/link';
import { useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { FiGithub, FiMenu, FiTwitter, FiX } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { Brand } from '../../atoms/Brand';
import { NavLink } from '../../atoms/NavLink';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbarOpen = () => setNavbarOpen((prev) => !prev);

  return (
    <nav className="relative flex justify-between">
      <Link href="/">
        <a className="flex items-center gap-3 font-extrabold">
          <Brand size={35} />
          <span>Noodle</span>
        </a>
      </Link>
      <div className="flex items-center gap-6">
        <ul
          data-testid="pages-links"
          className={twMerge(
            'gap-6 hidden md:flex',
            navbarOpen &&
              'flex absolute left-0 flex-col py-3 top-12 bg-zinc-900 w-full',
          )}
        >
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink
              href="https://github.com/ixahmedxi/noodle/blob/main/CONTRIBUTING.md"
              external
            >
              Contributing
            </NavLink>
          </li>
          <li>
            <NavLink
              href="https://main--629b4efffe8fed004a2a7681.chromatic.com"
              external
            >
              Design System
            </NavLink>
          </li>
        </ul>
        <div className="w-[1px] h-8 bg-zinc-200 dark:bg-zinc-700 hidden md:inline-block" />
        <ul className="flex gap-6">
          <li>
            <NavLink href="https://github.com/ixahmedxi/noodle" external>
              <FiGithub title="Github" size={22} />
            </NavLink>
          </li>
          <li>
            <NavLink href="https://twitter.com/ixahmedxii" external>
              <FiTwitter title="Twitter" size={22} />
            </NavLink>
          </li>
          <li>
            <NavLink href="https://discord.gg/ZWmTMEwrYx" external>
              <FaDiscord title="Discord" size={22} />
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={toggleNavbarOpen}
              className="inline-block md:hidden"
            >
              {navbarOpen ? (
                <FiX title="close-menu" size={22} />
              ) : (
                <FiMenu title="open-menu" size={22} />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
