import { ExitBreakPlugin, KEYS_HEADING, PlatePlugin } from '@udecode/plate';

export const exitBreakOptions: Partial<PlatePlugin<ExitBreakPlugin>> = {
  options: {
    rules: [
      {
        hotkey: 'mod+enter',
      },
      {
        hotkey: 'mod+shift+enter',
        before: true,
      },
      {
        hotkey: 'enter',
        query: {
          start: true,
          end: true,
          allow: KEYS_HEADING,
        },
      },
    ],
  },
};
