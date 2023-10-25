import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
