import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { type NextRequest } from "next/server";

const handler = (request: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: () => createTRPCContext({ req: request }),
  });

export { handler as GET, handler as POST };
