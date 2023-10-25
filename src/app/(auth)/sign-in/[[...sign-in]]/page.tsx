import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center">
      <SignIn />
    </main>
  );
}
