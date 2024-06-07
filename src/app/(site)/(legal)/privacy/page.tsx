import { getLegalDocs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { CustomMDX, MDXComponents } from '../../_components/custom-mdx';

export default async function PrivacyPage() {
  const docs = await getLegalDocs();
  const post = docs.find((d) => d.slug === 'privacy');

  if (!post) {
    notFound();
  }

  return (
    <>
      <MDXComponents.h1>{post.metadata.title}</MDXComponents.h1>
      <p className="my-3 text-sm md:my-4 md:text-base">
        {post.metadata.effectiveDate}
      </p>
      <CustomMDX source={post.content} />
    </>
  );
}
