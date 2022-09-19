import { signOut } from 'next-auth/react';
import { trpc } from '../utils/trpc';

export const Greeting = () => {
  const { data, isLoading, error } = trpc.me.useQuery();

  if (error) {
    throw new Error(error.message);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    return (
      <div>
        <h1>Hello there, {data.name?.split(' ')[0]}</h1>
        <h3>Signed in as {data.email}</h3>
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
  }

  return null;
};
