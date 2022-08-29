import {
  autoformatArrow,
  AutoformatBlockRule,
  autoformatComparison,
  autoformatDivision,
  autoformatEquality,
  autoformatFraction,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatOperation,
  autoformatPunctuation,
  AutoformatRule,
  autoformatSmartQuotes,
  autoformatSubscriptNumbers,
  autoformatSubscriptSymbols,
  autoformatSuperscriptNumbers,
  autoformatSuperscriptSymbols,
} from '@udecode/plate-autoformat';
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from '@udecode/plate-basic-marks';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import {
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  insertEmptyCodeBlock,
} from '@udecode/plate-code-block';
import {
  ELEMENT_DEFAULT,
  getParentNode,
  getPluginType,
  isElement,
  isType,
  PlateEditor,
} from '@udecode/plate-core';
import {
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading';
import {
  ELEMENT_LI,
  ELEMENT_OL,
  ELEMENT_UL,
  toggleList,
  unwrapList,
} from '@udecode/plate-list';

export const preFormat: AutoformatBlockRule['preFormat'] = (editor) =>
  unwrapList(editor);

export const format = (editor: PlateEditor, customFormatting: () => void) => {
  if (editor.selection) {
    const parentEntry = getParentNode(editor, editor.selection);
    if (!parentEntry) return;
    const [node] = parentEntry;
    if (
      isElement(node) &&
      !isType(editor, node, ELEMENT_CODE_BLOCK) &&
      !isType(editor, node, ELEMENT_CODE_LINE)
    ) {
      customFormatting();
    }
  }
};

export const formatList = (editor: PlateEditor, elementType: string) => {
  format(editor, () =>
    toggleList(editor, {
      type: elementType,
    }),
  );
};

export const autoFormatRules: AutoformatRule[] = [
  ...autoformatSmartQuotes,
  ...autoformatPunctuation,
  ...autoformatArrow,
  ...autoformatLegal,
  ...autoformatLegalHtml,
  ...autoformatComparison,
  ...autoformatEquality,
  ...autoformatFraction,
  ...autoformatDivision,
  ...autoformatOperation,
  ...autoformatSubscriptNumbers,
  ...autoformatSubscriptSymbols,
  ...autoformatSuperscriptNumbers,
  ...autoformatSuperscriptSymbols,
  {
    match: '# ',
    type: ELEMENT_H2,
    mode: 'block',
    preFormat,
  },
  {
    match: '## ',
    type: ELEMENT_H3,
    mode: 'block',
    preFormat,
  },
  {
    match: '### ',
    type: ELEMENT_H4,
    mode: 'block',
    preFormat,
  },
  {
    match: '#### ',
    type: ELEMENT_H5,
    mode: 'block',
    preFormat,
  },
  {
    match: '##### ',
    type: ELEMENT_H6,
    mode: 'block',
    preFormat,
  },
  {
    match: '> ',
    type: ELEMENT_BLOCKQUOTE,
    mode: 'block',
    preFormat,
  },
  {
    mode: 'block',
    type: ELEMENT_CODE_BLOCK,
    match: '``` ',
    triggerAtBlockStart: false,
    preFormat,
    format: (editor) => {
      insertEmptyCodeBlock(editor, {
        defaultType: getPluginType(editor, ELEMENT_DEFAULT),
        insertNodesOptions: { select: true },
      });
    },
  },
  {
    mode: 'block',
    type: ELEMENT_LI,
    match: ['* ', '- '],
    preFormat,
    format: (editor) => formatList(editor, ELEMENT_UL),
  },
  {
    mode: 'block',
    type: ELEMENT_LI,
    match: ['* ', '- '],
    preFormat,
    format: (editor) => formatList(editor, ELEMENT_UL),
  },
  {
    mode: 'block',
    type: ELEMENT_LI,
    match: ['1. ', '1) '],
    preFormat,
    format: (editor) => formatList(editor, ELEMENT_OL),
  },
  {
    mode: 'mark',
    type: [MARK_BOLD, MARK_ITALIC],
    match: '***',
  },
  {
    mode: 'mark',
    type: [MARK_UNDERLINE, MARK_ITALIC],
    match: '__*',
  },
  {
    mode: 'mark',
    type: [MARK_UNDERLINE, MARK_BOLD],
    match: '__**',
  },
  {
    mode: 'mark',
    type: [MARK_UNDERLINE, MARK_BOLD, MARK_ITALIC],
    match: '___***',
  },
  {
    mode: 'mark',
    type: MARK_BOLD,
    match: '**',
  },
  {
    mode: 'mark',
    type: MARK_UNDERLINE,
    match: '__',
  },
  {
    mode: 'mark',
    type: MARK_ITALIC,
    match: '*',
  },
  {
    mode: 'mark',
    type: MARK_ITALIC,
    match: '_',
  },
  {
    mode: 'mark',
    type: MARK_STRIKETHROUGH,
    match: '~~',
  },
  {
    mode: 'mark',
    type: MARK_SUPERSCRIPT,
    match: '^',
  },
  {
    mode: 'mark',
    type: MARK_SUBSCRIPT,
    match: '~',
  },
  {
    mode: 'mark',
    type: MARK_CODE,
    match: '`',
  },
];
