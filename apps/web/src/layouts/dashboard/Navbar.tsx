import { UserButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useRouter } from 'next/router';

import { Button } from '@noodle/ui';

import { Icon } from '@/components/Icon';

export const DashboardNavbar = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button type="button" variant="muted" size="icon">
          <Icon name="panel-left-close" />
        </Button>

        <div className="flex items-center">
          <Button
            type="button"
            variant="muted"
            size="icon"
            onClick={() => {
              router.back();
            }}
          >
            <Icon name="chevron-left" />
          </Button>

          <Button
            type="button"
            variant="muted"
            size="icon"
            onClick={() => {
              router.forward();
            }}
          >
            <Icon name="chevron-right" />
          </Button>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center gap-4">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            baseTheme: dark,
          }}
        />

        <Button type="button" variant="muted" size="icon">
          <Icon name="bell-ring" />
        </Button>

        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="gap-2 px-2.5 py-1.5"
        >
          <Icon name="plus" size={16} />
          <Icon
            name="chevron-down"
            size={11}
            className="text-gray-10 dark:text-graydark-10"
          />
        </Button>
      </div>
    </nav>
  );
};
