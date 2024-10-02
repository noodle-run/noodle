import { auth } from '@/lib/auth';

export async function WelcomeMessage() {
  const session = await auth();

  if (!session) {
    return null;
  }

  // Get the current hour in the user's local time
  const currentHour = new Date().getHours();

  // Determine the appropriate greeting based on the time of day
  let timeGreeting;
  if (currentHour < 12) {
    timeGreeting = 'Good morning';
  } else if (currentHour < 18) {
    timeGreeting = 'Good afternoon';
  } else {
    timeGreeting = 'Good evening';
  }

  const greeting = session.user.name
    ? `${timeGreeting}, ${session.user.name.split(' ')[0] ?? session.user.name}!`
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
