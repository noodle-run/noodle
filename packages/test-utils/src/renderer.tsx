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

import { type Session } from '@noodle/auth';

const trpc = createTRPCReact<AppRouter>();

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
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

export const mockNextAuth = ({
  session,
  status,
}: {
  session?: Omit<Session, 'expires'>;
  status?: 'authenticated' | 'unauthenticated' | 'loading';
}) => {
  return vi.mock('next-auth/react', async () => {
    const originalModule: Record<string, string> = await vi.importActual(
      'next-auth/react',
    );

    const mockSession: Omit<Session, 'expires'> = {
      user: {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        image: 'https://via.placeholder.com/150',
      },
    };

    return {
      __esModule: true,
      ...originalModule,
      useSession: vi.fn(() => {
        return {
          data: {
            ...(session ?? mockSession),
            expires: new Date(Date.now() + 2 * 86400).toISOString(),
          },
          status: status ?? 'authenticated',
        };
      }),
    };
  });
};
