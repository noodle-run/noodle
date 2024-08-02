'use client';

import { useUser } from '@clerk/nextjs';

export function WelcomeMessage() {
  const { user } = useUser();

  if (user === null || user === undefined) {
    return null;
  }

  return (
    <div className="space-y-3">
      <h1 className="text-4xl font-semibold">
        Good afternoon,{' '}
        {user.firstName ?? user.emailAddresses[0]?.emailAddress.split('@')[0]}!
      </h1>
      <p className="max-w-prose text-balance text-sm leading-6 text-foreground-muted">
        “The final wisdom of life requires not the annulment of incongruity but
        the achievement of serenity within and above it.” - Reinhold Niebuhr
      </p>
    </div>
  );
}
