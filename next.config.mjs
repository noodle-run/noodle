import createMDX from "@next/mdx";
import { fileURLToPath } from "node:url";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    serverComponentsExternalPackages: ["libsql"],
    optimizePackageImports: ["@nextui-org/react"],
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
