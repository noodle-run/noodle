import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { AlignPlugin } from '@udecode/plate-alignment/react';
import { autoformatRules } from './autoformat-rules';
import { SelectOnBackspacePlugin } from '@udecode/plate-select';
import { JuicePlugin } from '@udecode/plate-juice';
import { DocxPlugin } from '@udecode/plate-docx';
import { MarkdownPlugin } from '@udecode/plate-markdown';
import { TabbablePlugin } from '@udecode/plate-tabbable/react';
import { ResetNodePlugin } from '@udecode/plate-reset-node/react';
import { ImagePlugin } from '@udecode/plate-media/react';
import { ExitBreakPlugin, SoftBreakPlugin } from '@udecode/plate-break/react';
import { AutoformatPlugin } from '@udecode/plate-autoformat/react';
import {
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  someNode,
} from '@udecode/plate-common';
import { ParagraphPlugin } from '@udecode/plate-common/react';
import { NodeIdPlugin } from '@udecode/plate-node-id';
import { BlockSelectionPlugin } from '@udecode/plate-selection/react';
import { TrailingBlockPlugin } from '@udecode/plate-trailing-block';
import { HEADING_KEYS, HEADING_LEVELS } from '@udecode/plate-heading';
import { HeadingPlugin } from '@udecode/plate-heading/react';
import { IndentPlugin } from '@udecode/plate-indent/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { NormalizeTypesPlugin } from '@udecode/plate-normalizers';
import {
  isCodeBlockEmpty,
  isSelectionAtCodeBlockStart,
  unwrapCodeBlock,
} from '@udecode/plate-code-block';
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from '@udecode/plate-code-block/react';
import { LineHeightPlugin } from '@udecode/plate-line-height/react';
import { IndentListPlugin } from '@udecode/plate-indent-list/react';
import {
  TableCellHeaderPlugin,
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin,
} from '@udecode/plate-table/react';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { TodoListPlugin } from '@udecode/plate-list/react';
import Prism from 'prismjs';
import { LinkPlugin } from '@udecode/plate-link/react';
import { LinkFloatingToolbar } from '../ui/link-floating-toolbar';

export const plugins = [
  // Nodes
  HeadingPlugin,
  BlockquotePlugin,
  CodeBlockPlugin.configure({
    options: {
      syntax: true,
      prism: Prism,
    },
  }),
  CodeLinePlugin,
  CodeSyntaxPlugin,
  HorizontalRulePlugin,
  TablePlugin,
  TableRowPlugin,
  TableCellPlugin,
  TableCellHeaderPlugin,
  TodoListPlugin,
  LinkPlugin.configure({
    render: { afterEditable: () => <LinkFloatingToolbar /> },
  }),

  // Basic Marks
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  CodePlugin,
  SubscriptPlugin,
  SuperscriptPlugin,

  // Block Style
  AlignPlugin.configure({
    inject: {
      targetPlugins: [ParagraphPlugin.key, ...HEADING_LEVELS],
    },
  }),
  IndentPlugin.configure({
    inject: {
      targetPlugins: [
        ParagraphPlugin.key,
        BlockquotePlugin.key,
        CodeBlockPlugin.key,
        ...HEADING_LEVELS,
      ],
    },
  }),
  IndentListPlugin.configure({
    inject: {
      targetPlugins: [
        ParagraphPlugin.key,
        BlockquotePlugin.key,
        CodeBlockPlugin.key,
        ...HEADING_LEVELS,
      ],
    },
  }),
  LineHeightPlugin.configure({
    inject: {
      nodeProps: {
        defaultNodeValue: 1.5,
        validNodeValues: [1, 1.2, 1.5, 2, 3],
      },
      targetPlugins: [ParagraphPlugin.key, ...HEADING_LEVELS],
    },
  }),

  // Functionality
  AutoformatPlugin.configure({
    options: {
      rules: autoformatRules,
      enableUndoOnDelete: true,
    },
  }),
  BlockSelectionPlugin,
  ExitBreakPlugin.configure({
    options: {
      rules: [
        {
          hotkey: 'mod+enter',
        },
        {
          hotkey: 'mod+shift+enter',
          before: true,
        },
        {
          hotkey: 'enter',
          query: {
            start: true,
            end: true,
            allow: HEADING_LEVELS,
          },
          relative: true,
          level: 1,
        },
      ],
    },
  }),
  NodeIdPlugin,
  ResetNodePlugin.configure({
    options: {
      rules: [
        {
          types: [BlockquotePlugin.key, TodoListPlugin.key as string],
          defaultType: ParagraphPlugin.key,
          hotkey: 'Enter',
          predicate: isBlockAboveEmpty,
        },
        {
          types: [BlockquotePlugin.key, TodoListPlugin.key as string],
          defaultType: ParagraphPlugin.key,
          hotkey: 'Backspace',
          predicate: isSelectionAtBlockStart,
        },
        {
          types: [CodeBlockPlugin.key],
          defaultType: ParagraphPlugin.key,
          onReset: unwrapCodeBlock,
          hotkey: 'Enter',
          predicate: isCodeBlockEmpty,
        },
        {
          types: [CodeBlockPlugin.key],
          defaultType: ParagraphPlugin.key,
          onReset: unwrapCodeBlock,
          hotkey: 'Backspace',
          predicate: isSelectionAtCodeBlockStart,
        },
      ],
    },
  }),
  SelectOnBackspacePlugin.configure({
    options: {
      query: {
        allow: [ImagePlugin.key, HorizontalRulePlugin.key],
      },
    },
  }),
  SoftBreakPlugin.configure({
    options: {
      rules: [
        { hotkey: 'shift+enter' },
        {
          hotkey: 'enter',
          query: {
            allow: [
              CodeBlockPlugin.key,
              BlockquotePlugin.key,
              TableCellPlugin.key,
              TableCellHeaderPlugin.key,
            ],
          },
        },
      ],
    },
  }),
  TabbablePlugin.configure(({ editor }) => ({
    options: {
      query: () => {
        if (isSelectionAtBlockStart(editor)) {
          return false;
        }

        return !someNode(editor, {
          match: (n) => {
            return !!(
              n.type &&
              ([
                TablePlugin.key,
                TodoListPlugin.key,
                CodeBlockPlugin.key,
              ].includes(n.type as string) ||
                n['listStyleType'])
            );
          },
        });
      },
    },
  })),
  TrailingBlockPlugin.configure({
    options: { type: ParagraphPlugin.key },
  }),
  NormalizeTypesPlugin.configure({
    options: {
      rules: [{ path: [0], strictType: HEADING_KEYS.h1 }],
    },
  }),

  // Deserialization
  DocxPlugin,
  MarkdownPlugin,
  JuicePlugin,
];
