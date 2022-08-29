import { editorComponents } from '@noodle/ui';
import {
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createUnderlinePlugin,
} from '@udecode/plate-basic-marks';
import { createBlockquotePlugin } from '@udecode/plate-block-quote';
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
} from '@udecode/plate-break';
import { createPlugins } from '@udecode/plate-core';
import { createHeadingPlugin } from '@udecode/plate-heading';
import { createParagraphPlugin } from '@udecode/plate-paragraph';
import { createResetNodePlugin } from '@udecode/plate-reset-node';
import { createSelectOnBackspacePlugin } from '@udecode/plate-select';
import { createTrailingBlockPlugin } from '@udecode/plate-trailing-block';
import { selectOnBackspaceOptions } from './options/backspaceSelect';
import { exitBreakOptions } from './options/exitBreak';
import { resetNodeOptions } from './options/resetNode';
import { softBreakOptions } from './options/softBreak';
import { trailingBlockOptions } from './options/trailingBlock';
import { createForcedLayoutPlugin } from './plugins/createForcedLayoutPlugin';

export const plugins = createPlugins(
  [
    // Elements
    createParagraphPlugin(),
    createHeadingPlugin(),
    createBlockquotePlugin(),

    // Marks
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createCodePlugin(),

    // Behavior
    createExitBreakPlugin(exitBreakOptions),
    createSoftBreakPlugin(softBreakOptions),
    createTrailingBlockPlugin(trailingBlockOptions),
    createSelectOnBackspacePlugin(selectOnBackspaceOptions),
    createResetNodePlugin(resetNodeOptions),

    // Custom
    createForcedLayoutPlugin(),
  ],
  { components: editorComponents },
);
