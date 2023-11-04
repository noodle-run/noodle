import { db } from "@/db";
import { getAuth } from "@clerk/nextjs/server";
import { TRPCError, initTRPC } from "@trpc/server";
import { type NextRequest } from "next/server";
import superjson from "superjson";
import { ZodError } from "zod";

type CreateContextOptions = {
  auth: ReturnType<typeof getAuth> | null;
};

const createInnerTRPCContext = ({ auth }: CreateContextOptions) => {
  return {
    auth,
    db,
  };
};

export const createTRPCContext = (opts: { req: NextRequest }) => {
  return createInnerTRPCContext({ auth: getAuth(opts.req) });
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.auth?.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      auth: {
        ...ctx.auth,
        userId: ctx.auth.userId,
      },
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
