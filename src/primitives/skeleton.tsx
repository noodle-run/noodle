import { cn } from '@/lib/utils';

function Skeleton({
  className,
  noPulse = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { noPulse?: boolean }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-element',
        noPulse && 'animate-none',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
