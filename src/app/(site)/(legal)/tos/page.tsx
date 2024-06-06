import { getLegalDocs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { CustomMDX, MDXComponents } from '../../_components/custom-mdx';

export default async function TermsPage() {
  const docs = await getLegalDocs();
  const post = docs.find((d) => d.slug === 'tos');

  if (!post) {
    notFound();
  }

  return (
    <>
      <MDXComponents.h1>{post.metadata.title}</MDXComponents.h1>
      <p className="my-3 text-sm md:my-4 md:text-base">
        Effective date: {post.metadata.effectiveDate}
      </p>
      <CustomMDX source={post.content} />
    </>
  );
}
