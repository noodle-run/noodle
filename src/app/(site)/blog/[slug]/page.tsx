import { getBlogPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { CustomMDX, MDXComponents } from '../../_components/custom-mdx';

export const dynamic = 'force-static';

interface Props {
  params: {
    slug: string;
  };
}

export default async function Home({ params }: Props) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-prose py-12">
      <MDXComponents.h1>{post.metadata.title}</MDXComponents.h1>
      <p>{post.metadata.summary}</p>
      <CustomMDX source={post.content} />
    </main>
  );
}
