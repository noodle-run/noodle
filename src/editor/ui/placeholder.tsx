import type { ReactElement } from 'react';
import React from 'react';
import { cn } from '@udecode/cn';
import {
  createNodeHOC,
  createNodesHOC,
  ParagraphPlugin,
  usePlaceholderState,
} from '@udecode/plate-common/react';
import { HEADING_KEYS } from '@udecode/plate-heading';

import type {
  CreateHOCOptions,
  NodeComponent,
  PlaceholderProps,
} from '@udecode/plate-common/react';

interface CustomPlaceholderProps extends PlaceholderProps {
  placeholder: string;
  nodeProps?: Record<string, unknown>;
  children: ReactElement;
}

export const Placeholder = (props: CustomPlaceholderProps) => {
  const { children, nodeProps, placeholder } = props;

  const { enabled } = usePlaceholderState(props);

  return React.Children.map(children, (child: ReactElement) => {
    return React.cloneElement(child, {
      className: (child.props as { className: string }).className,
      nodeProps: {
        ...nodeProps,
        className: cn(
          enabled &&
            'before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]',
        ),
        placeholder,
      },
    });
  });
};

export const withPlaceholder = createNodeHOC(Placeholder);

export const withPlaceholdersPrimitive: (
  components: Record<string, NodeComponent>,
  options:
    | CreateHOCOptions<CustomPlaceholderProps>
    | CreateHOCOptions<CustomPlaceholderProps>[],
) => Record<string, NodeComponent> = createNodesHOC(Placeholder);

export const withPlaceholders: (
  components: Record<string, NodeComponent>,
) => Record<string, NodeComponent> = (components) =>
  withPlaceholdersPrimitive(components, [
    {
      hideOnBlur: true,
      key: ParagraphPlugin.key,
      placeholder: 'Type a paragraph',
      query: {
        maxLevel: 1,
      },
    },
    {
      hideOnBlur: false,
      key: HEADING_KEYS.h1,
      placeholder: 'Untitled',
    },
  ]);
