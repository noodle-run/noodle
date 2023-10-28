import { authMiddleware } from "@clerk/nextjs";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse, type NextRequest } from "next/server";
import { env } from "./env.mjs";

let redis: Redis;
let ratelimit: Ratelimit;

if (env.UPSTASH_REDIS_REST_URL) {
  redis = new Redis({
    url: env.UPSTASH_REDIS_REST_URL ?? "",
    token: env.UPSTASH_REDIS_REST_TOKEN ?? "",
  });

  ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(20, "3 s"),
  });
}

async function rateLimitMiddleware(
  request: NextRequest,
): Promise<Response | undefined> {
  const ip = request.ip ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/blocked", request.url));
}

const publicRoutesThatShouldRedirectAfterAuth = ["/", "/waitlist"];

export default authMiddleware({
  beforeAuth: (req) => {
    if (env.UPSTASH_REDIS_REST_URL) {
      return rateLimitMiddleware(req);
    }
    return NextResponse.next();
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
