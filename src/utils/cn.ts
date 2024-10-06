import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function to merge Tailwind CSS classes using a combination of clsx
 * and tailwind-merge.
 * @example
 *   import { cn } from '@lib/utils';
 *
 *   const classes = cn('text-black', 'bg-white', 'p-4');
 * @param inputs - The classes to merge.
 * @returns A string of the classes merged together.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
