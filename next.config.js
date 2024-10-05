import { fileURLToPath } from 'node:url';

import { createJiti } from 'jiti';

const jiti = createJiti(fileURLToPath(import.meta.url));

await jiti.import('./src/env');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['next-mdx-remote', 'lucide-react'],

  // We run ESLint and TypeScript separately in the CI pipeline
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
