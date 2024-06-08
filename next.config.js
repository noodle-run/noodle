import { fileURLToPath } from 'node:url';

import createJiti from 'jiti';
import bundleAnalyzerPlugin from '@next/bundle-analyzer';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/env');

const withBundleAnalyzer = bundleAnalyzerPlugin({
  enabled: process.env['ANALYZE'] === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
};

export default withBundleAnalyzer(nextConfig);
