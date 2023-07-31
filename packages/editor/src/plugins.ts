import {
  createAutoformatPlugin,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createExitBreakPlugin,
  createPlugins,
  createSoftBreakPlugin,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_PARAGRAPH,
  ELEMENT_TD,
  KEYS_HEADING,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from '@udecode/plate';

import { BlockquoteElement } from './components/elements/block-quote';
import {
  HeadingH1Element,
  HeadingH2Element,
  HeadingH3Element,
  HeadingH4Element,
} from './components/elements/headings';
import { ParagraphElement } from './components/elements/paragraph';
import {
  BoldLeaf,
  CodeLeaf,
  ItalicLeaf,
  StrikethroughLeaf,
  SubscriptLeaf,
  SuperscriptLeaf,
  UnderlineLeaf,
} from './components/marks/basic';
import { autoformatRules } from './config/autoFormat';

export const plugins = createPlugins(
  [
    createBasicElementsPlugin(),
    createBasicMarksPlugin(),
    createExitBreakPlugin({
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
              allow: KEYS_HEADING,
            },
            relative: true,
            level: 1,
          },
        ],
      },
    }),
    createSoftBreakPlugin({
      options: {
        rules: [
          { hotkey: 'shift+enter' },
          {
            hotkey: 'enter',
            query: {
              allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
            },
          },
        ],
      },
    }),
    createAutoformatPlugin({
      options: {
        rules: autoformatRules,
        enableUndoOnDelete: true,
      },
    }),
  ],
  {
    components: {
      [ELEMENT_PARAGRAPH]: ParagraphElement,
      [ELEMENT_H1]: HeadingH1Element,
      [ELEMENT_H2]: HeadingH2Element,
      [ELEMENT_H3]: HeadingH3Element,
      [ELEMENT_H4]: HeadingH4Element,
      [ELEMENT_BLOCKQUOTE]: BlockquoteElement,

      // Marks
      [MARK_BOLD]: BoldLeaf,
      [MARK_ITALIC]: ItalicLeaf,
      [MARK_UNDERLINE]: UnderlineLeaf,
      [MARK_STRIKETHROUGH]: StrikethroughLeaf,
      [MARK_SUBSCRIPT]: SubscriptLeaf,
      [MARK_SUPERSCRIPT]: SuperscriptLeaf,
      [MARK_CODE]: CodeLeaf,
    },
  },
);
