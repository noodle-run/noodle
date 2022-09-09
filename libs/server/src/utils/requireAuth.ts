import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';
import { authOptions } from './authOptions';

export const requireAuth = async (
  ctx: GetServerSidePropsContext,
  cb: (
    session: Session,
  ) => GetServerSidePropsResult<{ [key: string]: unknown }>,
) => {
  const session = await unstable_getServerSession(
    ctx.req,
    ctx.res,
    authOptions,
  );

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return cb(session);
};
