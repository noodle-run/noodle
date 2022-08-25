import { editorComponents } from '@noodle/ui';
import {
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createPlugins,
} from '@udecode/plate';

export const plugins = createPlugins(
  [createBasicElementsPlugin(), createBasicMarksPlugin()],
  { components: editorComponents },
);
