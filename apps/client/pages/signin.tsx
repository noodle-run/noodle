import { authOptions } from '@noodle/server';
import { Auth } from '@noodle/ui';
import { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

type QueryType = {
  error?: string;
};

const SignIn: NextPage = () => {
  const router = useRouter();
  const queries = router.query as QueryType;

  return (
    <Auth
      onMagicLinkLogin={(email) => signIn('email', { email })}
      onGithubLogin={() => signIn('github')}
      onGoogleLogin={() => signIn('google')}
      error={queries.error}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: {
        session,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default SignIn;
