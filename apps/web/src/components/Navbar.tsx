import { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Disc, Github, Menu, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { Brand } from '@noodle/ui';

import { constants } from '@/utils/constants';

export const Navbar = () => {
  const [height, setHeight] = useState<'auto' | number>(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (!isMobile) {
      setHeight('auto');
    }
  }, [isMobile]);

  return (
    <nav className="bg-gray-1 dark:bg-graydark-1 container fixed left-1/2 top-0 z-50 -translate-x-1/2 pb-4 pt-8 md:pb-0 lg:bg-transparent lg:dark:bg-transparent">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Brand size={35} />
          <span className="font-semibold">Noodle</span>
        </Link>

        <div className="order-3 w-full md:order-1 md:w-auto">
          <AnimateHeight id="example-panel" duration={500} height={height}>
            <ul className="md:border-gray-6 md:dark:border-graydark-6 bg-gray-1 dark:bg-graydark-1 flex flex-col text-sm md:flex-row md:items-center md:rounded-xl md:border">
              <li>
                <Link
                  href="/"
                  className="text-gray-11 dark:text-graydark-11 hover:text-gray-12 dark:hover:text-graydark-12 inline-block pb-3 pt-6 transition-colors md:py-3 md:pl-4 md:pr-6"
                  onClick={() => setHeight(0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  onClick={() => setHeight(0)}
                  className="text-gray-11 dark:text-graydark-11 hover:text-gray-12 dark:hover:text-graydark-12 inline-block py-3 transition-colors md:px-6 md:py-3"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#mission"
                  onClick={() => setHeight(0)}
                  className="text-gray-11 dark:text-graydark-11 hover:text-gray-12 dark:hover:text-graydark-12 inline-block py-3 transition-colors md:px-6 md:py-3"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  onClick={() => setHeight(0)}
                  className="text-gray-11 dark:text-graydark-11 hover:text-gray-12 dark:hover:text-graydark-12 inline-block pb-2 pt-3 transition-colors md:py-3 md:pl-6 md:pr-4"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.gg/SERySfj8Eg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-11 dark:text-graydark-11 hover:text-gray-12 dark:hover:text-graydark-12 inline-block pb-2 pt-3 transition-colors md:py-3 md:pl-6 md:pr-4"
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
              href={constants.github}
              className="text-gray-11 dark:text-graydark-11 hover:text-gray-12 dark:hover:text-graydark-12 flex items-center px-2 transition-colors"
            >
              <Github size={20} />
            </a>
          </li>
          <li>
            <a
              href={constants.twitter}
              className="text-gray-11 dark:text-graydark-11 hover:text-gray-12 dark:hover:text-graydark-12 flex items-center px-2 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </li>

          <li className="inline-block md:hidden">
            <button
              type="button"
              className="flex items-center px-2"
              aria-expanded={height !== 0}
              aria-controls="example-panel"
              onClick={() => setHeight(height === 0 ? 'auto' : 0)}
            >
              <span className="sr-only">Open Menu</span>
              <Menu size={20} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
