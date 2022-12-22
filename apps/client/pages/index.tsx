import { LoadingScreen } from '@noodle/ui';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { FC, Suspense } from 'react';
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

const InternalError = dynamic(
  () => import('@noodle/ui').then((mod) => mod.InternalError),
  {
    suspense: true,
  },
);

const Dashboard: FC = () => {
  const { data: session } = useSession();

  const {
    data: greeting,
    isLoading: isGreetingLoading,
    error: greetingError,
  } = trpc.getGreeting.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const {
    data: modules,
    isLoading: isModulesLoading,
    error: modulesError,
  } = trpc.getRecentModules.useQuery();

  const {
    data: notebooks,
    isLoading: isNotebooksLoading,
    error: notebooksError,
  } = trpc.getAllNotebooks.useQuery();

  if (greetingError) {
    return <InternalError message={greetingError.message} />;
  }

  if (modulesError) {
    return <InternalError message={modulesError.message} />;
  }

  if (notebooksError) {
    return <InternalError message={notebooksError.message} />;
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <TodaysActivity
        userAvatar={session?.user?.image || undefined}
        userName={session?.user?.name || undefined}
        greetingProps={{
          ...greeting,
          isLoading: isGreetingLoading,
        }}
        recentModules={{
          data: modules,
          isLoading: isModulesLoading,
        }}
        recentNotebooks={{
          data: notebooks,
          isLoading: isNotebooksLoading,
        }}
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
