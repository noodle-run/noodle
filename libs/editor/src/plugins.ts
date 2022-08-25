import { editorComponents } from '@noodle/ui';
import {
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createExitBreakPlugin,
  createPlugins,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createTrailingBlockPlugin,
} from '@udecode/plate';
import { selectOnBackspaceOptions } from './options/backspaceSelect';
import { exitBreakOptions } from './options/exitBreak';
import { resetNodeOptions } from './options/resetNode';
import { softBreakOptions } from './options/softBreak';
import { trailingBlockOptions } from './options/trailingBlock';

export const plugins = createPlugins(
  [
    // Elements
    createBasicElementsPlugin(),
    createBasicMarksPlugin(),

    // Behavior
    createExitBreakPlugin(exitBreakOptions),
    createSoftBreakPlugin(softBreakOptions),
    createTrailingBlockPlugin(trailingBlockOptions),
    createSelectOnBackspacePlugin(selectOnBackspaceOptions),
    createResetNodePlugin(resetNodeOptions),
  ],
  { components: editorComponents },
);
