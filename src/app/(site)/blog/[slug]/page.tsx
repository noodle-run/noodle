import { getBlogPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { CustomMDX, MDXComponents } from '../../_components/custom-mdx';
import type { Metadata } from 'next';
import { constructMetadata } from '@/utils/construct-metadata';
import { constants } from '@/constants';
import { getBaseUrl } from '@/utils/base-url';

export const dynamic = 'force-static';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  return constructMetadata({
    title: `${title} - ${constants.shortName}`,
    description,
    image: image ? `${getBaseUrl()}/${image}` : `${getBaseUrl()}/thumbnail.jpg`,
    publishedTime,
    type: 'article',
    url: `${getBaseUrl()}/blog/${params.slug}`,
  });
}

export default async function Home({ params }: Props) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-prose py-8 md:py-12">
      <MDXComponents.h1>{post.metadata.title}</MDXComponents.h1>
      <MDXComponents.p className="my-4 text-foreground-muted">
        {post.metadata.publishedAt}
      </MDXComponents.p>
      <MDXComponents.p className="my-4 text-foreground-muted">
        {post.metadata.summary}
      </MDXComponents.p>
      <CustomMDX source={post.content} />
    </main>
  );
}
