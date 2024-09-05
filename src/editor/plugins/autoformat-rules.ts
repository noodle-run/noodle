import {
  autoformatArrow,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatMath,
  autoformatPunctuation,
  autoformatSmartQuotes,
} from '@udecode/plate-autoformat';
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  insertEmptyCodeBlock,
} from '@udecode/plate-code-block';
import {
  getParentNode,
  insertNodes,
  isBlock,
  isElement,
  isType,
  ParagraphPlugin,
  setNodes,
} from '@udecode/plate-common';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { HighlightPlugin } from '@udecode/plate-highlight/react';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import {
  INDENT_LIST_KEYS,
  ListStyleType,
  toggleIndentList,
} from '@udecode/plate-indent-list';
import { toggleList, unwrapList } from '@udecode/plate-list';
import {
  BulletedListPlugin,
  ListItemPlugin,
  NumberedListPlugin,
  TodoListPlugin,
} from '@udecode/plate-list/react';
import { openNextToggles, TogglePlugin } from '@udecode/plate-toggle/react';

import type {
  AutoformatBlockRule,
  AutoformatRule,
} from '@udecode/plate-autoformat';
import type { SlateEditor } from '@udecode/plate-common';
import type { TTodoListItemElement } from '@udecode/plate-list';

export const preFormat: AutoformatBlockRule['preFormat'] = (editor) => {
  unwrapList(editor);
};

export const format = (editor: SlateEditor, customFormatting: () => void) => {
  if (editor.selection) {
    const parentEntry = getParentNode(editor, editor.selection);

    if (!parentEntry) {
      return;
    }

    const [node] = parentEntry;

    if (
      isElement(node) &&
      !isType(editor, node, CodeBlockPlugin.key) &&
      !isType(editor, node, CodeLinePlugin.key)
    ) {
      customFormatting();
    }
  }
};

export const formatList = (editor: SlateEditor, elementType: string) => {
  format(editor, () =>
    toggleList(editor, {
      type: elementType,
    }),
  );
};

export const autoformatMarks: AutoformatRule[] = [
  {
    match: '***',
    mode: 'mark',
    type: [BoldPlugin.key, ItalicPlugin.key],
  },
  {
    match: '__**',
    mode: 'mark',
    type: [UnderlinePlugin.key, BoldPlugin.key],
  },
  {
    match: '__*',
    mode: 'mark',
    type: [UnderlinePlugin.key, ItalicPlugin.key],
  },
  {
    match: '___***',
    mode: 'mark',
    type: [UnderlinePlugin.key, BoldPlugin.key, ItalicPlugin.key],
  },
  {
    match: '**',
    mode: 'mark',
    type: BoldPlugin.key,
  },
  {
    match: '__',
    mode: 'mark',
    type: UnderlinePlugin.key,
  },
  {
    match: '*',
    mode: 'mark',
    type: ItalicPlugin.key,
  },
  {
    match: '_',
    mode: 'mark',
    type: ItalicPlugin.key,
  },
  {
    match: '~~',
    mode: 'mark',
    type: StrikethroughPlugin.key,
  },
  {
    match: '^',
    mode: 'mark',
    type: SuperscriptPlugin.key,
  },
  {
    match: '~',
    mode: 'mark',
    type: SubscriptPlugin.key,
  },
  {
    match: '==',
    mode: 'mark',
    type: HighlightPlugin.key as string,
  },
  {
    match: '≡',
    mode: 'mark',
    type: HighlightPlugin.key as string,
  },
  {
    match: '`',
    mode: 'mark',
    type: CodePlugin.key,
  },
];

export const autoformatBlocks: AutoformatRule[] = [
  {
    match: '# ',
    mode: 'block',
    preFormat,
    type: HEADING_KEYS.h1,
  },
  {
    match: '## ',
    mode: 'block',
    preFormat,
    type: HEADING_KEYS.h2,
  },
  {
    match: '### ',
    mode: 'block',
    preFormat,
    type: HEADING_KEYS.h3,
  },
  {
    match: '#### ',
    mode: 'block',
    preFormat,
    type: HEADING_KEYS.h4,
  },
  {
    match: '##### ',
    mode: 'block',
    preFormat,
    type: HEADING_KEYS.h5,
  },
  {
    match: '###### ',
    mode: 'block',
    preFormat,
    type: HEADING_KEYS.h6,
  },
  {
    match: '> ',
    mode: 'block',
    preFormat,
    type: BlockquotePlugin.key,
  },
  {
    format: (editor) => {
      insertEmptyCodeBlock(editor, {
        defaultType: ParagraphPlugin.key,
        insertNodesOptions: { select: true },
      });
    },
    match: '```',
    mode: 'block',
    preFormat,
    triggerAtBlockStart: false,
    type: CodeBlockPlugin.key,
  },
  {
    match: '+ ',
    mode: 'block',
    preFormat: openNextToggles,
    type: TogglePlugin.key,
  },
  {
    format: (editor) => {
      setNodes(editor, { type: HorizontalRulePlugin.key });
      insertNodes(editor, {
        children: [{ text: '' }],
        type: ParagraphPlugin.key,
      });
    },
    match: ['---', '—-', '___ '],
    mode: 'block',
    type: HorizontalRulePlugin.key,
  },
];

export const autoformatLists: AutoformatRule[] = [
  {
    format: (editor) => {
      formatList(editor, BulletedListPlugin.key);
    },
    match: ['* ', '- '],
    mode: 'block',
    preFormat,
    type: ListItemPlugin.key,
  },
  {
    format: (editor) => {
      formatList(editor, NumberedListPlugin.key);
    },
    match: ['^\\d+\\.$ ', '^\\d+\\)$ '],
    matchByRegex: true,
    mode: 'block',
    preFormat,
    type: ListItemPlugin.key,
  },
  {
    match: '[] ',
    mode: 'block',
    type: TodoListPlugin.key as string,
  },
  {
    format: (editor) => {
      setNodes<TTodoListItemElement>(
        editor,
        { checked: true, type: TodoListPlugin.key },
        {
          match: (n) => isBlock(editor, n),
        },
      );
    },
    match: '[x] ',
    mode: 'block',
    type: TodoListPlugin.key as string,
  },
];

export const autoformatIndentLists: AutoformatRule[] = [
  {
    format: (editor) => {
      toggleIndentList(editor, {
        listStyleType: ListStyleType.Disc,
      });
    },
    match: ['* ', '- '],
    mode: 'block',
    type: 'list',
  },
  {
    format: (editor) => {
      toggleIndentList(editor, {
        listStyleType: ListStyleType.Decimal,
      });
    },
    match: ['^\\d+\\.$ ', '^\\d+\\)$ '],
    matchByRegex: true,
    mode: 'block',
    type: 'list',
  },
  {
    format: (editor) => {
      toggleIndentList(editor, {
        listStyleType: INDENT_LIST_KEYS.todo,
      });
      setNodes(editor, {
        checked: false,
        listStyleType: INDENT_LIST_KEYS.todo,
      });
    },
    match: ['[] '],
    mode: 'block',
    type: 'list',
  },
  {
    format: (editor) => {
      toggleIndentList(editor, {
        listStyleType: INDENT_LIST_KEYS.todo,
      });
      setNodes(editor, {
        checked: true,
        listStyleType: INDENT_LIST_KEYS.todo,
      });
    },
    match: ['[x] '],
    mode: 'block',
    type: 'list',
  },
];

export const autoformatRules: AutoformatRule[] = [
  ...autoformatBlocks,
  ...autoformatMarks,
  ...autoformatSmartQuotes,
  ...autoformatPunctuation,
  ...autoformatLegal,
  ...autoformatLegalHtml,
  ...autoformatArrow,
  ...autoformatMath,
  ...autoformatIndentLists,
];
