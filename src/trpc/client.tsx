// src/trpc/react.tsx
"use client";

import type { AppRouter } from "@/server/api/root";
import { getBaseUrl } from "@/utils/getBaseUrl";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { unstable_httpBatchStreamLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { type inferRouterOutputs } from "@trpc/server";
import { useState } from "react";
import SuperJSON from "superjson";

export const trpc = createTRPCReact<AppRouter>();

export function TRPCReactProvider(props: {
  children: React.ReactNode;
  headers: Headers;
}) {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    trpc.createClient({
      transformer: SuperJSON,
      links: [
        unstable_httpBatchStreamLink({
          url: getBaseUrl() + "/api/trpc",
          headers() {
            const headers = new Map(props.headers);
            return Object.fromEntries(headers);
          },
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration transformer={SuperJSON}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          {props.children}
        </trpc.Provider>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}

export type RouterOutputs = inferRouterOutputs<AppRouter>;
