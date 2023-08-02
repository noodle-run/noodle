import '@noodle/env';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: !!process.env['CI'],
  },
  typescript: {
    ignoreBuildErrors: !!process.env['CI'],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  transpilePackages: ['@noodle/api', '@noodle/db'],
};

export default config;
