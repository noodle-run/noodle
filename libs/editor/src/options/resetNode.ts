import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_PARAGRAPH,
  ELEMENT_TODO_LI,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  PlatePlugin,
  ResetNodePlugin,
} from '@udecode/plate';

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
