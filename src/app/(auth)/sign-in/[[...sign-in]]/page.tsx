import { SignIn } from '@clerk/nextjs';

/**
 * The Signin page component.
 * @returns The signin page.
 */
export default function Page() {
  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center">
      <SignIn />
    </main>
  );
}
