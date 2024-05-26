import { api } from '@/lib/trpc/server';
import { SignOutButton } from '@clerk/nextjs';

/**
 * This is the main page for the dashboard.
 * @returns A Next.js RSC page component.
 */
export default async function DashboardHome() {
  const { message } = await api.greeting.protected();

  return (
    <main>
      <h1>Hello World</h1>
      <SignOutButton />
      <h1>{message}</h1>
    </main>
  );
}
