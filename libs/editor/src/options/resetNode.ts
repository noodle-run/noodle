import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import {
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  PlatePlugin,
} from '@udecode/plate-core';
import { ELEMENT_TODO_LI } from '@udecode/plate-list';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { ResetNodePlugin } from '@udecode/plate-reset-node';

export const resetNodeOptions: Partial<PlatePlugin<ResetNodePlugin>> = {
  options: {
    rules: [
      {
        types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
        defaultType: ELEMENT_PARAGRAPH,
        hotkey: 'Enter',
        predicate: isBlockAboveEmpty,
      },
      {
        types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
        defaultType: ELEMENT_PARAGRAPH,
        hotkey: 'Backspace',
        predicate: isSelectionAtBlockStart,
      },
    ],
  },
};
