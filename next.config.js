import { fileURLToPath } from 'node:url';

import createJiti from 'jiti';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/env');

const extensions = ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: extensions,
  transpilePackages: ['next-mdx-remote'],

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
  experimental: {
    mdxRs: true,
    turbo: {
      resolveExtensions: extensions.map((ext) => `.${ext}`),
    },
  },
};

export default nextConfig;
