import 'server-only';

import { cache } from 'react';
import { headers } from 'next/headers';

import { createCaller } from '@/api';
import { createTRPCContext } from '@/api/trpc';

const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set('x-trpc-source', 'rsc');

  return createTRPCContext({
    headers: heads,
  });
});

export const api = createCaller(createContext);
