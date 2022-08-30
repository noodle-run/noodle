import { createAutoformatPlugin } from '@udecode/plate-autoformat';
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
import { createCodeBlockPlugin } from '@udecode/plate-code-block';
import { createPlugins } from '@udecode/plate-core';
import { createHeadingPlugin } from '@udecode/plate-heading';
import { createListPlugin } from '@udecode/plate-list';
import { createParagraphPlugin } from '@udecode/plate-paragraph';
import { createResetNodePlugin } from '@udecode/plate-reset-node';
import { createSelectOnBackspacePlugin } from '@udecode/plate-select';
import { createTrailingBlockPlugin } from '@udecode/plate-trailing-block';
import { components } from './components';
import { autoFormatRules } from './options/autoFormatRules';
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
    createCodeBlockPlugin({
      options: { syntax: false },
    }),
    createListPlugin(),

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
    createAutoformatPlugin({
      options: { rules: autoFormatRules, enableUndoOnDelete: true },
    }),

    // Custom
    createForcedLayoutPlugin(),
  ],
  { components },
);
