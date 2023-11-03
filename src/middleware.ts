import { authMiddleware } from "@clerk/nextjs";
import { type NextRequest, NextResponse } from "next/server";

function rateLimitMiddleware(_request: NextRequest): Response {
  // const ip = request.ip ?? "127.0.0.1";
  // const { success } = await ratelimit.limit(ip);
  return NextResponse.next();
}

const publicRoutesThatShouldRedirectAfterAuth = ["/", "/waitlist"];

export default authMiddleware({
  beforeAuth: (req) => {
    return rateLimitMiddleware(req);
  },
  afterAuth: (auth, req) => {
    if (
      auth.userId &&
      publicRoutesThatShouldRedirectAfterAuth.includes(req.nextUrl.pathname)
    ) {
      return NextResponse.redirect(new URL("/app", req.url));
    }

    if (!auth.userId && req.nextUrl.pathname.includes("/app")) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    return NextResponse.next();
  },
  publicRoutes: [
    ...publicRoutesThatShouldRedirectAfterAuth,
    "/blocked",
    "/editor",
    "/privacy",
    "/(api|trpc)(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
