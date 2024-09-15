import type { FC } from 'react';

import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { CodeBlockPlugin } from '@udecode/plate-code-block/react';
import type { NodeComponent } from '@udecode/plate-common/react';
import {
  ParagraphPlugin,
  createNodesWithHOC,
} from '@udecode/plate-common/react';
import {
  type WithDraggableOptions,
  withDraggable as withDraggablePrimitive,
} from '@udecode/plate-dnd';
import { HEADING_KEYS } from '@udecode/plate-heading';
import {
  BulletedListPlugin,
  NumberedListPlugin,
} from '@udecode/plate-list/react';

import { type DraggableProps, Draggable } from './draggable';

interface MyDraggableOptions<T> extends WithDraggableOptions<T> {
  keys?: string[];
  key?: string;
}

export const withDraggable = (
  Component: FC,
  options?: MyDraggableOptions<Partial<DraggableProps>>,
) =>
  withDraggablePrimitive<Partial<DraggableProps>>(
    Draggable,
    Component,
    options,
  );

export const withDraggablesPrimitive: (
  components: Record<string, NodeComponent>,
  options: MyDraggableOptions<
    Partial<Omit<DraggableProps, 'children' | 'editor' | 'element'>>
  >[],
) => Record<string, NodeComponent> = createNodesWithHOC(withDraggable);

export const withDraggables = (components: Record<string, NodeComponent>) => {
  return withDraggablesPrimitive(components, [
    {
      keys: [
        ParagraphPlugin.key,
        BulletedListPlugin.key,
        NumberedListPlugin.key,
      ],
      level: 0,
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-[1px]',
        },
      },
    },
    {
      key: HEADING_KEYS.h2,
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-9',
        },
      },
    },
    {
      key: HEADING_KEYS.h3,
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-7',
        },
      },
    },
    {
      key: HEADING_KEYS.h4,
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-6',
        },
      },
    },
    {
      key: HEADING_KEYS.h5,
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-[22px]',
        },
      },
    },
    {
      key: HEADING_KEYS.h6,
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-[17px]',
        },
      },
    },
    {
      keys: [BlockquotePlugin.key, CodeBlockPlugin.key],
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-[1px]',
        },
      },
    },
  ]);
};
