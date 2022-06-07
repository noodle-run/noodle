import { FC, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createClient, Provider } from './trpc';

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    createClient({
      url: 'http://localhost:4200/api/trpc',
    }),
  );
  return (
    <Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};
