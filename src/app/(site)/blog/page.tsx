import { getBlogPosts } from '@/lib/mdx';
import { Button } from '@/primitives/button';
import { MoveRightIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // TODO: once we have more than one post, we can use this to show the latest post
  const latestPost = posts[0];

  if (!latestPost) {
    notFound();
  }

  return (
    <main className="py-12 md:py-16 lg:py-24">
      <h1 className="mb-8 text-3xl font-medium md:text-4xl lg:mb-12">
        Latest post
      </h1>
      <div key={latestPost.slug}>
        <p className="mb-4 text-sm text-foreground-muted">
          {latestPost.metadata.publishedAt}
        </p>
        <h3 className="mb-4 inline-block text-xl font-medium md:text-2xl">
          {latestPost.metadata.title}
        </h3>
        <p className="max-w-prose text-balance text-sm leading-relaxed text-foreground-muted md:text-base">
          {latestPost.metadata.summary}
        </p>
        <Button variant="default" size="sm" className="mt-6" asChild>
          <a href={`/blog/${latestPost.slug}`}>
            Read post <MoveRightIcon size={16} strokeWidth={3} />
          </a>
        </Button>
      </div>
      <h2 className="pt-12 text-2xl font-medium md:pt-16 md:text-3xl lg:pt-24">
        More posts
      </h2>
      <p className="mt-6 text-balance text-left text-foreground-muted md:mt-12 md:text-center lg:mt-16">
        🤪 Waiting on the Noodle team (Ahmed) to write more...
      </p>
    </main>
  );
}
