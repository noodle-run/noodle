import { signOut, useSession } from 'next-auth/react';
import { trpc } from '../utils/trpc';

export const Greeting = () => {
  const { data: session } = useSession();
  const { data: greetingData } = trpc.proxy.greeting.useQuery({
    name: 'from tRPC',
  });

  return (
    <div>
      <h1>{greetingData && greetingData.msg}</h1>
      <h3>Signed in as {session?.user?.email}</h3>
      <button
        onClick={() => {
          signOut().catch((err: string) => {
            throw new Error(err);
          });
        }}
      >
        Sign out
      </button>
    </div>
  );
};
