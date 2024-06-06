import type { MDXComponents } from 'mdx/types';
import { buttonVariants } from './primitives/button';
import { cn } from './lib/utils';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className="text-2xl font-medium md:text-3xl" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="mb-3 mt-4 text-xl font-medium md:mt-6 md:text-2xl"
        {...props}
      >
        {children}
      </h2>
    ),
    p: ({ children, ...props }) => (
      <p className="mb-3 text-sm text-foreground-muted md:text-base" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-8" {...props}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }) => (
      <li
        className="mb-1.5 text-sm text-foreground-muted md:text-base"
        {...props}
      >
        {children}
      </li>
    ),
    strong: ({ children, ...props }) => (
      <strong className="text-foreground" {...props}>
        {children}
      </strong>
    ),
    a: ({ children, ...props }) => (
      <a
        className={cn(
          buttonVariants({ variant: 'link' }),
          'p-0 font-bold before:w-full',
        )}
        {...props}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
