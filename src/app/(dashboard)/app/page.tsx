'use client';

import { useUser } from '@clerk/nextjs';

export default function DashboardHome() {
  const { user } = useUser();

  return (
    <div className="flex flex-1">
      <div className="flex-1">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold">
            Good afternoon,{' '}
            {user?.firstName
              ? user.firstName
              : user?.emailAddresses[0]?.emailAddress
                  .split('@')[0]
                  ?.split('.')[0]}
            !
          </h1>
          <p className="max-w-prose text-balance text-sm leading-6 text-foreground-muted">
            “The final wisdom of life requires not the annulment of incongruity
            but the achievement of serenity within and above it.” - Reinhold
            Niebuhr
          </p>
        </div>
        <div>More content</div>
      </div>
      <div className="min-w-[280px] rounded-lg border p-4">Right side</div>
    </div>
  );
}
