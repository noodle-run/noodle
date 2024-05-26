import { SignUp } from '@clerk/nextjs';

/**
 * The Signup page component.
 * @returns The signup page.
 */
export default function Page() {
  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center">
      <SignUp />
    </main>
  );
}
