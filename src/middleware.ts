import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/app(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  // if the user is authenticated and is trying to access anything other than the dashboard, redirect them to the dashboard
  if (auth().userId && !isProtectedRoute(req)) {
    return NextResponse.redirect(new URL(`${req.nextUrl.origin}/app`));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
