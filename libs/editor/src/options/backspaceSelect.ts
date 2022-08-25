import {
  ELEMENT_HR,
  PlatePlugin,
  SelectOnBackspacePlugin,
} from '@udecode/plate';

export const selectOnBackspaceOptions: Partial<
  PlatePlugin<SelectOnBackspacePlugin>
> = {
  options: {
    query: {
      allow: [ELEMENT_HR],
    },
  },
};
