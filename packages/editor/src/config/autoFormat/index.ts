import {
  autoformatArrow,
  autoformatComparison,
  autoformatDivision,
  autoformatEquality,
  autoformatFraction,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatMath,
  autoformatOperation,
  autoformatPunctuation,
  autoformatSmartQuotes,
  autoformatSubscriptNumbers,
  autoformatSubscriptSymbols,
  autoformatSuperscriptNumbers,
  autoformatSuperscriptSymbols,
} from '@udecode/plate';

import { autoFormatHeadings } from './headings';
import { autoformatMarks } from './marks';

export const autoformatRules = [
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
  ...autoformatMath,

  // Custom
  ...autoformatMarks,
  ...autoFormatHeadings,
];
