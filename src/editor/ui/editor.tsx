import React from 'react';
import { cn } from '@udecode/cn';
import { PlateContent } from '@udecode/plate-common/react';
import { cva } from 'class-variance-authority';

import type { PlateContentProps } from '@udecode/plate-common/react';
import type { VariantProps } from 'class-variance-authority';

const editorVariants = cva(
  cn(
    'relative overflow-x-auto whitespace-pre-wrap break-words',
    'min-h-[80px] w-full rounded-md text-sm ring-offset-background placeholder:text-foreground-muted focus-visible:outline-none',
    '[&_[data-slate-placeholder]]:text-foreground-muted [&_[data-slate-placeholder]]:!opacity-100',
    '[&_[data-slate-placeholder]]:top-[auto_!important]',
    '[&_strong]:font-bold',
  ),
  {
    defaultVariants: {
      focusRing: true,
      size: 'sm',
      variant: 'outline',
    },
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
      focusRing: {
        false: '',
        true: 'focus-visible:ring-2 focus-visible:ring-pink-solid-hover focus-visible:ring-offset-2',
      },
      focused: {
        true: 'ring-2 ring-pink-solid-hover ring-offset-2',
      },
      size: {
        md: 'text-base',
        sm: 'text-sm',
      },
      variant: {
        ghost: '',
        outline: 'border',
      },
    },
  },
);

export type EditorProps = PlateContentProps &
  VariantProps<typeof editorVariants>;

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  (
    {
      className,
      disabled,
      focusRing,
      focused,
      readOnly = false,
      size = 'md',
      variant,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative w-full" ref={ref}>
        <PlateContent
          aria-disabled={disabled}
          className={cn(
            editorVariants({
              disabled,
              focusRing,
              focused,
              size,
              variant,
            }),
            className,
          )}
          data-plate-selectable
          disableDefaultStyles
          readOnly={disabled ?? readOnly}
          {...props}
        />
      </div>
    );
  },
);
Editor.displayName = 'Editor';

export { Editor };
