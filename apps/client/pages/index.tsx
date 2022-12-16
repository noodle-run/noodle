import { LoadingScreen } from '@noodle/ui';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { ComponentProps, FC, Suspense } from 'react';
import { trpc } from '../utils/trpc';

const TodaysActivity = dynamic(
  () => import('@noodle/ui').then((mod) => mod.TodaysActivity),
  {
    suspense: true,
  },
);

const Landing = dynamic(() => import('@noodle/ui').then((mod) => mod.Landing), {
  suspense: true,
});

const Dashboard: FC = () => {
  const { data: session } = useSession();
  const { data: quote, isLoading } = trpc.getGreeting.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  const { data: modules } = trpc.getAllModules.useQuery();
  const { data: notebooks } = trpc.getAllNotebooks.useQuery();

  return (
    <Suspense fallback="Loading...">
      <TodaysActivity
        userAvatar={session?.user?.image || undefined}
        userName={session?.user?.name || undefined}
        greetingProps={{ ...quote, isLoading }}
        recentModules={
          modules as ComponentProps<typeof TodaysActivity>['recentModules']
        }
        recentNotebooks={
          notebooks as ComponentProps<typeof TodaysActivity>['recentNotebooks']
        }
      />
    </Suspense>
  );
};

const Home: NextPage = () => {
  const { status } = useSession();

  const { mutateAsync } = trpc.addEmailToWaitList.useMutation();

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  if (status === 'unauthenticated') {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Landing
          onWaitListFormSubmit={async (email) => mutateAsync({ email })}
        />
      </Suspense>
    );
  }

  return <Dashboard />;
};

export default Home;
