'use client';

import { useSession } from 'next-auth/react';

export function WelcomeMessage() {
  const { data: session } = useSession();

  if (!session?.user) {
    return null;
  }

  const { user } = session;

  return (
    <div className="space-y-3">
      <h1 className="text-4xl font-semibold">
        Good afternoon, {user.name ?? user.email?.split('@')[0]}!
      </h1>
      <p className="max-w-prose text-balance text-sm leading-6 text-foreground-muted">
        “The final wisdom of life requires not the annulment of incongruity but
        the achievement of serenity within and above it.” - Reinhold Niebuhr
      </p>
    </div>
  );
}
