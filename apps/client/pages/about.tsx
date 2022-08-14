import { MDXProvider } from '@mdx-js/react';
import { Navbar } from '@noodle/ui';
import { readFile } from 'fs/promises';
import { InferGetStaticPropsType, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import { ReactNode } from 'react';

export const getStaticProps = async () => {
  const content = await readFile(
    join(process.cwd(), 'apps/client/content/pages/about.mdx'),
    'utf-8',
  );

  const mdxSource = await serialize(content);

  return {
    props: { mdxSource },
  };
};

const components = {
  h1: ({ children }: { children?: ReactNode }) => (
    <h1 className="text-3xl font-extrabold leading-relaxed">{children}</h1>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="pt-4 text-2xl font-extrabold leading-relaxed">{children}</h2>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="py-2 text-zinc-600 dark:text-zinc-400">{children}</p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="pl-6 leading-loose list-disc text-zinc-600 dark:text-zinc-400">
      {children}
    </ul>
  ),
};

const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  mdxSource,
}) => (
  <main className="container px-6 py-8 mx-auto md:px-0">
    <Navbar />
    <article className="pt-12">
      <MDXProvider components={components}>
        <MDXRemote {...mdxSource} />
      </MDXProvider>
    </article>
  </main>
);

export default About;
