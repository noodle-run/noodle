import { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import type { MouseEventHandler } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { Brand } from '@noodle/ui';

import { constants } from '@/utils/constants';
import { Icon } from './Icon';

export const Navbar = () => {
  const [height, setHeight] = useState<'auto' | number>(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (!isMobile) {
      setHeight('auto');
    }
  }, [isMobile]);

  const smoothScrollToTop: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      isMobile && setHeight(0);
    }
  };

  const smoothScrollToId =
    (id: string): MouseEventHandler<HTMLAnchorElement> =>
    (e) => {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({
          top: (document.getElementById(id)?.offsetTop ?? 0) - 150,
          behavior: 'smooth',
        });
        isMobile && setHeight(0);
      }
    };

  return (
    <nav className="bg-gray-1 dark:bg-graydark-1 container fixed left-1/2 top-0 z-50 -translate-x-1/2 pb-4 pt-4 lg:bg-transparent lg:pb-0 lg:pt-8 lg:dark:bg-transparent">
      <div className="flex flex-wrap items-center justify-between">
        <Link
          href="/"
          onClick={smoothScrollToTop}
          className="flex items-center gap-4"
        >
          <Brand size={35} />
          <span className="font-semibold">Noodle</span>
        </Link>

        <div className="order-3 w-full md:order-1 md:w-auto">
          <AnimateHeight id="example-panel" duration={500} height={height}>
            <ul className="bg-gray-1 md:border-gray-6 md:dark:border-graydark-6 dark:bg-graydark-1 flex flex-col text-sm md:flex-row md:items-center md:rounded-xl md:border">
              <li>
                <Link
                  href="/"
                  onClick={smoothScrollToTop}
                  className="text-gray-11 dark:text-graydark-11 dark:hover:text-graydark-12 hover:text-gray-12 inline-block pb-3 pt-6 transition-colors md:py-3 md:pl-4 md:pr-6"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  onClick={smoothScrollToId('features')}
                  className="text-gray-11 dark:text-graydark-11 dark:hover:text-graydark-12 hover:text-gray-12 inline-block py-3 transition-colors md:px-6 md:py-3"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#mission"
                  onClick={smoothScrollToId('mission')}
                  className="text-gray-11 dark:text-graydark-11 dark:hover:text-graydark-12 hover:text-gray-12 inline-block py-3 transition-colors md:px-6 md:py-3"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  onClick={smoothScrollToId('faq')}
                  className="text-gray-11 dark:text-graydark-11 dark:hover:text-graydark-12 hover:text-gray-12 inline-block pb-2 pt-3 transition-colors md:py-3 md:pl-6 md:pr-4"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.gg/SERySfj8Eg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-11 dark:text-graydark-11 dark:hover:text-graydark-12 hover:text-gray-12 inline-block pb-2 pt-3 transition-colors md:py-3 md:pl-6 md:pr-4"
                >
                  Discord
                </a>
              </li>
            </ul>
          </AnimateHeight>
        </div>

        <ul className="order-2 flex items-center">
          <li>
            <a
              target="_blank"
              href={constants.github}
              rel="noopener noreferrer"
              className="text-gray-11 dark:text-graydark-11 dark:hover:text-graydark-12 hover:text-gray-12 flex items-center px-2 transition-colors"
            >
              <Icon name="github" size={20} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href={constants.twitter}
              rel="noopener noreferrer"
              className="text-gray-11 dark:text-graydark-11 dark:hover:text-graydark-12 hover:text-gray-12 flex items-center px-2 transition-colors"
            >
              <Icon name="twitter" size={20} />
            </a>
          </li>

          <li className="inline-block md:hidden">
            <button
              type="button"
              className="flex items-center px-2"
              aria-expanded={height !== 0}
              aria-controls="example-panel"
              onClick={() => {
                setHeight(height === 0 ? 'auto' : 0);
              }}
            >
              <span className="sr-only">Open Menu</span>
              <Icon name="menu" size={20} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
