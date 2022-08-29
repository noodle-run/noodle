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
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading';
import { unwrapList } from '@udecode/plate-list';

export const preFormat: AutoformatBlockRule['preFormat'] = (editor) =>
  unwrapList(editor);

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
