import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export default auth((req) => {
  const { nextUrl, auth: session } = req;
  const isLoggedIn = !!session?.user;
  const isAppRoute = nextUrl.pathname.startsWith('/app');
  const isSignInRoute = nextUrl.pathname === '/sign-in';

  if (isAppRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/sign-in', nextUrl.origin));
  }

  if (isSignInRoute && isLoggedIn) {
    return NextResponse.redirect(new URL('/app', nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
