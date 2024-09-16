import { auth, signIn } from '@/lib/auth';
import { redirect } from 'next/navigation';

/**
 * The Signin page component.
 * @returns The signin page.
 */
export default async function Page() {
  const session = await auth();

  if (session) {
    return redirect('/app');
  }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center">
      <form
        action={async () => {
          'use server';
          await signIn('github');
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
    </main>
  );
}
