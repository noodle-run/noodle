import {
  ELEMENT_PARAGRAPH,
  PlatePlugin,
  TrailingBlockPlugin,
} from '@udecode/plate';

export const trailingBlockOptions: Partial<PlatePlugin<TrailingBlockPlugin>> = {
  options: {
    type: ELEMENT_PARAGRAPH,
  },
};
