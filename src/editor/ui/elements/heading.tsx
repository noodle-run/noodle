import React from 'react';

import { withRef, withVariants } from '@udecode/cn';
import { PlateElement } from '@udecode/plate-common/react';
import { cva } from 'class-variance-authority';

const headingVariants = cva('inline-block', {
  variants: {
    isFirstBlock: {
      false: '',
      true: '!mt-0',
    },
    variant: {
      h1: 'mb-4 mt-[1.4em] text-4xl font-semibold',
      h2: 'mb-2 mt-[1.15em] text-3xl font-semibold tracking-tight',
      h3: 'mb-1.5 mt-[1.15em] text-2xl font-semibold tracking-tight',
      h4: 'mb-1 mt-[1.15em] text-xl font-semibold tracking-tight',
      h5: 'mb-1 mt-[1.15em] text-lg font-semibold tracking-tight',
      h6: 'mb-1 mt-[1.15em] text-base font-semibold tracking-tight',
    },
  },
});

const HeadingElementVariants = withVariants(PlateElement, headingVariants, [
  'isFirstBlock',
  'variant',
]);

export const HeadingElement = withRef<typeof HeadingElementVariants>(
  ({ children, isFirstBlock, variant = 'h1', ...props }, ref) => {
    const { editor, element } = props;

    const Element = variant ?? 'h1';

    return (
      <HeadingElementVariants
        asChild
        isFirstBlock={isFirstBlock ?? element === editor.children[0]}
        ref={ref}
        variant={variant}
        {...props}
      >
        <Element>{children}</Element>
      </HeadingElementVariants>
    );
  },
);
