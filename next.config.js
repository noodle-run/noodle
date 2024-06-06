import { fileURLToPath } from 'node:url';

import createJiti from 'jiti';
import mdxPlugin from '@next/mdx';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/env');

const withMDX = mdxPlugin();

const extensions = ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: extensions,

  // We run ESLint and TypeScript separately in the CI pipeline
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    mdxRs: true,
    turbo: {
      resolveExtensions: extensions.map((ext) => `.${ext}`),
    },
  },
};

export default withMDX(nextConfig);
