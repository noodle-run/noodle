import { useState } from 'react';
import type { AppRouter } from '@noodle/api';
import type { RenderOptions } from '@testing-library/react';
import type { FC, PropsWithChildren, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { httpLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import fetch from 'cross-fetch';
import superjson from 'superjson';

const trpc = createTRPCReact<AppRouter>();

export const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      transformer: superjson,
      links: [
        httpLink({
          url: `http://localhost:3000/api/trpc`,
          fetch,
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
