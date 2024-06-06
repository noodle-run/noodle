import { fileURLToPath } from 'node:url';
import { withSentryConfig } from '@sentry/nextjs';
import createJiti from 'jiti';
import mdxPlugin from '@next/mdx';
import process from 'node:process';

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

export default withMDX(
  withSentryConfig(nextConfig, {
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    authToken: process.env.SENTRY_TOKEN,
    silent: false,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }),
);
