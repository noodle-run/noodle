import { styled } from '@noodle/stitches';
import PageLink from 'next/link';
import { ComponentProps } from 'react';
import { FiBook, FiCalendar, FiClock, FiStar, FiZap } from 'react-icons/fi';
import { Brand, Link } from '../../atoms';

const BrandAnchor = styled('a', {
  mb: '$6',
  px: '$3',
});

const links: Omit<ComponentProps<typeof Link>, 'variant'>[] = [
  {
    href: '/',
    icon: <FiZap />,
    text: "Today's Activity",
  },
  {
    href: '/modules',
    icon: <FiBook />,
    text: 'Modules',
  },
  {
    href: '/todos',
    icon: <FiStar />,
    text: 'Todos',
  },
  {
    href: '/assignments',
    icon: <FiClock />,
    text: 'Assignments',
  },
  {
    href: '/calendar',
    icon: <FiCalendar />,
    text: 'Calendar',
  },
];

export const SideMenu = () => (
  <nav>
    <PageLink href="/">
      <BrandAnchor>
        <Brand size="50" />
      </BrandAnchor>
    </PageLink>
    <ul>
      {links.map(({ href, icon, text }) => (
        <li key={href}>
          <Link variant="sidemenu" href={href} icon={icon} text={text} />
        </li>
      ))}
    </ul>
  </nav>
);
