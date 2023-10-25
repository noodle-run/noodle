import {
  type AutoformatPlugin,
  autoformatArrow,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatMath,
  autoformatPunctuation,
  autoformatSmartQuotes,
} from "@udecode/plate-autoformat";
import { type PlatePlugin } from "@udecode/plate-common";
import { autoformatBlocks } from "./blocks";
import { autoformatIndentLists } from "./indent-list";
import { autoformatMarks } from "./marks";

export const autoFormatConfig: Partial<PlatePlugin<AutoformatPlugin>> = {
  options: {
    rules: [
      ...autoformatBlocks,
      ...autoformatIndentLists,
      ...autoformatMarks,
      ...autoformatSmartQuotes,
      ...autoformatPunctuation,
      ...autoformatLegal,
      ...autoformatLegalHtml,
      ...autoformatArrow,
      ...autoformatMath,
    ],
    enableUndoOnDelete: true,
  },
};
