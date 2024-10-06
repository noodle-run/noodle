'use client';

import { Skeleton } from '@/primitives/skeleton';
import { useUser } from '@clerk/nextjs';

export function WelcomeMessage() {
  const { isLoaded, user } = useUser();

  if (!isLoaded || !user) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-10 w-2/5" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-5 w-1/2" />
        </div>
      </div>
    );
  }

  const currentHour = new Date().getHours();

  let timeGreeting;
  if (currentHour < 12) {
    timeGreeting = 'Good morning';
  } else if (currentHour < 18) {
    timeGreeting = 'Good afternoon';
  } else {
    timeGreeting = 'Good evening';
  }

  const greeting = user.firstName
    ? `${timeGreeting}, ${user.firstName}!`
    : `${timeGreeting}!`;

  return (
    <div className="space-y-3">
      <h1 className="text-4xl font-semibold">{greeting}</h1>
      <p className="max-w-prose text-balance text-sm leading-6 text-foreground-muted">
        “The final wisdom of life requires not the annulment of incongruity but
        the achievement of serenity within and above it.” - Reinhold Niebuhr
      </p>
    </div>
  );
}
