import {
  createAutoformatPlugin,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createPlugins,
  ELEMENT_PARAGRAPH,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from '@udecode/plate';

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
