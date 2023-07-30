import { type IconNames } from '@/components/Icon';

type PageLink = {
  href: string;
  icon: IconNames;
  label: string;
};

const pageLinks: PageLink[] = [
  {
    href: '/app',
    icon: 'home',
    label: 'Home',
  },
  {
    href: '/app/modules',
    icon: 'puzzle',
    label: 'Modules',
  },
  {
    href: '/app/notebooks',
    icon: 'file-edit',
    label: 'Notebooks',
  },
  {
    href: '/app/tasks',
    icon: 'list-todo',
    label: 'Tasks',
  },
  {
    href: '/app/assignments',
    icon: 'list-checks',
    label: 'Assignments',
  },
  {
    href: '/app/calendar',
    icon: 'calendar-days',
    label: 'Calendar',
  },
];

export { pageLinks };
