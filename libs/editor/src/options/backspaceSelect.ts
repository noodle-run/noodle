import { PlatePlugin } from '@udecode/plate-core';
import { ELEMENT_HR } from '@udecode/plate-horizontal-rule';
import { SelectOnBackspacePlugin } from '@udecode/plate-select';

export const selectOnBackspaceOptions: Partial<
  PlatePlugin<SelectOnBackspacePlugin>
> = {
  options: {
    query: {
      allow: [ELEMENT_HR],
    },
  },
};
