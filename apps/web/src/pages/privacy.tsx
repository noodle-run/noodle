/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import { readFile } from 'fs/promises';
import path from 'path';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { Navbar } from '@/components/Navbar';
import { type NextPageWithLayout } from '@/utils/NextPageWithLayout';

type PageProps = {
  source: MDXRemoteSerializeResult;
};

const PrivacyPage: NextPageWithLayout<PageProps> = ({ source }) => {
  return (
    <div className="container mx-auto py-24 lg:py-32">
      <MDXRemote
        {...source}
        components={{
          h1: (props) => <h1 className="text-4xl font-extrabold" {...props} />,
          h2: (props) => (
            <h2 className="mt-12 text-3xl font-extrabold" {...props} />
          ),
          h3: (props) => (
            <h3 className="mt-10 text-2xl font-extrabold" {...props} />
          ),
          h6: (props) => (
            <h6
              className="text-gray-10 dark:text-graydark-10 mt-3 font-semibold"
              {...props}
            />
          ),
          p: (props) => (
            <p
              className="text-gray-11 dark:text-graydark-11 mt-6 leading-7"
              {...props}
            />
          ),
          strong: (props) => (
            <strong
              className="text-gray-12 dark:text-graydark-12 font-semibold"
              {...props}
            />
          ),
          i: (props) => (
            <i
              className="text-gray-12 dark:text-graydark-12 font-semibold"
              {...props}
            />
          ),
          ul: (props) => (
            <ul
              className="text-gray-11 dark:text-graydark-11 list-disc pl-12 pt-4 leading-loose"
              {...props}
            />
          ),
          ol: (props) => (
            <ol
              className="text-gray-11 dark:text-graydark-11 list-decimal pl-12 pt-4 leading-loose"
              {...props}
            />
          ),
          li: (props) => (
            <li className="text-gray-11 dark:text-graydark-11" {...props} />
          ),
          a: (props) => (
            <a
              className="text-primary-500 underline underline-offset-4"
              {...props}
            />
          ),
          table: (props) => (
            <table
              className="text-gray-11 dark:text-graydark-11 mt-6 border-collapse"
              {...props}
            />
          ),
          th: (props) => (
            <th
              className="text-gray-12 dark:text-graydark-12 border-gray-5 dark:border-graydark-5 border px-4 py-2"
              {...props}
            />
          ),
          td: (props) => (
            <td
              className="text-gray-11 dark:text-graydark-11 border-gray-5 dark:border-graydark-5 border px-4 py-2"
              {...props}
            />
          ),
        }}
      />
    </div>
  );
};

PrivacyPage.getLayout = (page) => {
  return (
    <main>
      <Navbar />
      {page}
    </main>
  );
};

export async function getStaticProps() {
  const file = await readFile(
    path.join(process.cwd(), 'src/content', 'legal', 'privacy.md'),
    'utf-8',
  );
  const mdxSource = await serialize(file, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [remarkGfm],
    },
  });
  return { props: { source: mdxSource } };
}

export default PrivacyPage;
/* eslint-enable jsx-a11y/heading-has-content */
/* eslint-enable jsx-a11y/anchor-has-content */
