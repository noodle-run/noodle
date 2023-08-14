import { Button, Typography } from '@noodle/ui';

import { Icon } from '@/components/Icon';

export const SideMenuModules = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between px-4">
        <Typography.P as="h3" className="text-xs">
          Modules
        </Typography.P>
        <Button type="button" variant="muted" size="icon" className="p-2">
          <Icon name="plus" size={16} />
        </Button>
      </div>
      <div className="w-full">
        <Typography.P className="w-[220px] px-4 pt-1 text-xs leading-4 opacity-50">
          Create modules to organize your study material.
        </Typography.P>
      </div>
    </div>
  );
};
