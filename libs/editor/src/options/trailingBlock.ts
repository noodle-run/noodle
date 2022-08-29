import { PlatePlugin } from '@udecode/plate-core';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { TrailingBlockPlugin } from '@udecode/plate-trailing-block';

export const trailingBlockOptions: Partial<PlatePlugin<TrailingBlockPlugin>> = {
  options: {
    type: ELEMENT_PARAGRAPH,
  },
};
