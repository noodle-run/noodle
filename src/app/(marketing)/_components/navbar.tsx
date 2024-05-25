'use client';

import { forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  BotIcon,
  ChevronRightIcon,
  Edit2Icon,
  FlaskRoundIcon,
  ListChecksIcon,
} from 'lucide-react';

import { constants } from '@/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/primitives/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/primitives/navigation-menu';

interface ListItemProps {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

// TODO: put in the correct links

const features: ListItemProps[] = [
  {
    title: 'Note Taking',
    icon: <Edit2Icon size={18} />,
    href: '/docs/primitives/alert-dialog',
    description: 'Write your notes and we will take care of the rest.',
  },
  {
    title: 'Noodle AI',
    icon: <BotIcon size={18} />,
    href: '/docs/primitives/hover-card',
    description: 'Your very own assistant helping you stay on top of studies.',
  },
  {
    title: 'Task Management',
    icon: <ListChecksIcon size={18} />,
    href: '/docs/primitives/progress',
    description: 'Never miss a thing that you have to do for your modules.',
  },
  {
    title: 'Flashcards & Quizzes',
    icon: <FlaskRoundIcon size={18} />,
    href: '/docs/primitives/progress',
    description: 'Auto generated flashcards and quizzes from your notes.',
  },
];

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'z-50 flex select-none items-start gap-3 rounded-md border border-transparent px-4 py-3 leading-none no-underline outline-none transition-colors hover:border-gray-element hover:bg-gray-element/30 hover:text-gray-foreground focus:border-gray-element focus:bg-gray-element/30 focus:text-gray-foreground',
            className,
          )}
          {...props}
        >
          <div className="size-[18px]">{icon}</div>
          <div className="space-y-2">
            <div className="text-sm font-medium leading-none text-foreground">
              {title}
            </div>
            <p className="line-clamp-2 text-xs leading-normal">{children}</p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'sticky inset-x-0 top-0 z-50 w-full border-b border-transparent bg-transparent py-4 transition-colors duration-500',
        scroll && 'border-gray-element bg-background/85 backdrop-blur-md',
      )}
    >
      <div className="container flex items-center justify-between transition-all">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" width={35} height={35} alt="Noodle Logo" />
          <span>Noodle</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="absolute right-36 top-1/2 z-30 size-20 -translate-y-1/2 rounded-full bg-pink opacity-50 blur-3xl" />
                <ul className="grid gap-3 p-3 md:w-[450px] lg:w-[550px] lg:grid-cols-[1fr_0.85fr]">
                  <div className="flex flex-col gap-3">
                    {features.map((feature) => (
                      <ListItem
                        key={feature.title}
                        href={feature.href}
                        title={feature.title}
                        icon={feature.icon}
                      >
                        {feature.description}
                      </ListItem>
                    ))}
                  </div>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex size-full select-none flex-col justify-end rounded-md border border-gray-element bg-[#191919]/50 px-6 py-3 no-underline outline-none backdrop-blur-lg transition-colors hover:bg-[#191919]/75 focus:shadow-md"
                        href="/"
                      >
                        <Image
                          src="/logo.svg"
                          width={35}
                          height={35}
                          alt="Noodle Logo"
                        />
                        <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                          {constants.shortName}
                        </div>
                        <p className="text-sm leading-snug text-foreground-muted">
                          Helping students stay productive and on top of their
                          work.
                        </p>

                        <Link
                          href="/docs"
                          className="mt-6 flex items-center gap-2 py-2 text-sm transition-colors hover:text-gray-foreground"
                        >
                          Explore all features <ChevronRightIcon size={13} />
                        </Link>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Changelog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Button size="sm" asChild>
            <Link href="/sign-in">
              Dashboard <ChevronRightIcon size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
