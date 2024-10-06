import { auth, currentUser } from '@clerk/nextjs/server';

export async function WelcomeMessage() {
  const { redirectToSignIn } = auth();

  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
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
