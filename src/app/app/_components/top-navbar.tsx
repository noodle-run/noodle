import { Button } from '@/primitives/button';
import { PanelLeftCloseIcon } from 'lucide-react';
import type { Session } from 'next-auth';
import { UserProfileDropdown } from './user-profile-dropdown';

export function TopNavbar({ session }: { session: Session }) {
  return (
    <nav className="mb-4 flex items-center justify-between">
      <Button variant="ghost" size="icon" className="-ml-2">
        <PanelLeftCloseIcon strokeWidth={1.5} size={18} />
      </Button>

      <UserProfileDropdown session={session} />
    </nav>
  );
}
