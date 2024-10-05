'use client';

import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/primitives/dropdown-menu';
import { SunIcon, MoonIcon, LaptopIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeDropdownSub() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <MoonIcon className="mr-2 size-4" />
        <span>Switch theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuItem
            onClick={() => {
              setTheme('light');
            }}
          >
            <SunIcon className="mr-2 size-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setTheme('dark');
            }}
          >
            <MoonIcon className="mr-2 size-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              setTheme('system');
            }}
          >
            <LaptopIcon className="mr-2 size-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
