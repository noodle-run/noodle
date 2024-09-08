import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { AlignPlugin } from '@udecode/plate-alignment';
import { autoformatRules } from './autoformat-rules';
import { SelectOnBackspacePlugin } from '@udecode/plate-select';
import { JuicePlugin } from '@udecode/plate-juice';
import { DocxPlugin } from '@udecode/plate-docx';
import { MarkdownPlugin } from '@udecode/plate-markdown';
import { TabbablePlugin } from '@udecode/plate-tabbable';
import { ResetNodePlugin } from '@udecode/plate-reset-node';
import { ImagePlugin } from '@udecode/plate-media/react';
import { ExitBreakPlugin, SoftBreakPlugin } from '@udecode/plate-break/react';
import { AutoformatPlugin } from '@udecode/plate-autoformat';
import {
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  ParagraphPlugin,
  someNode,
} from '@udecode/plate-common';
import { NodeIdPlugin } from '@udecode/plate-node-id';
import { BlockSelectionPlugin } from '@udecode/plate-selection/react';
import { TrailingBlockPlugin } from '@udecode/plate-trailing-block';
import {
  HEADING_KEYS,
  HEADING_LEVELS,
  HeadingPlugin,
} from '@udecode/plate-heading';
import { IndentPlugin } from '@udecode/plate-indent';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { NormalizeTypesPlugin } from '@udecode/plate-normalizers';
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
  isCodeBlockEmpty,
  isSelectionAtCodeBlockStart,
  unwrapCodeBlock,
} from '@udecode/plate-code-block';
import { LineHeightPlugin } from '@udecode/plate-line-height';
import { IndentListPlugin } from '@udecode/plate-indent-list';
import {
  TableCellHeaderPlugin,
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin,
} from '@udecode/plate-table';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { TodoListPlugin } from '@udecode/plate-list';
import Prism from 'prismjs';

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
          types: [BlockquotePlugin.key, TodoListPlugin.key],
          defaultType: ParagraphPlugin.key,
          hotkey: 'Enter',
          predicate: isBlockAboveEmpty,
        },
        {
          types: [BlockquotePlugin.key, TodoListPlugin.key],
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
