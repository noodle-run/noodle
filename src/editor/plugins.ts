import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  createBasicMarksPlugin,
} from "@udecode/plate-basic-marks";
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
} from "@udecode/plate-break";
import {
  ELEMENT_CODE_BLOCK,
  isCodeBlockEmpty,
  isSelectionAtCodeBlockStart,
  unwrapCodeBlock,
} from "@udecode/plate-code-block";
import {
  PlateLeaf,
  createHistoryPlugin,
  createPlugins,
  createReactPlugin,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  withProps,
} from "@udecode/plate-common";
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  KEYS_HEADING,
  createHeadingPlugin,
} from "@udecode/plate-heading";
import { ELEMENT_HR } from "@udecode/plate-horizontal-rule";
import { ELEMENT_TODO_LI } from "@udecode/plate-list";
import { ELEMENT_IMAGE } from "@udecode/plate-media";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
import { createNormalizeTypesPlugin } from "@udecode/plate-normalizers";
import {
  ELEMENT_PARAGRAPH,
  createParagraphPlugin,
} from "@udecode/plate-paragraph";
import { createResetNodePlugin } from "@udecode/plate-reset-node";
import { createSelectOnBackspacePlugin } from "@udecode/plate-select";
import { ELEMENT_TD } from "@udecode/plate-table";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { autoFormatConfig } from "./auto-format";
import { HeadingElement } from "./ui/elements/heading";
import { ParagraphElement } from "./ui/elements/paragraph";
import { BoldLeaf } from "./ui/leafs/bold";
import { CodeLeaf } from "./ui/leafs/code";
import { withPlaceholders } from "./ui/placeholder";

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH,
};

const resetBlockTypesCodeBlockRule = {
  types: [ELEMENT_CODE_BLOCK],
  defaultType: ELEMENT_PARAGRAPH,
  onReset: unwrapCodeBlock,
};

export const plugins = createPlugins(
  [
    // Essentials
    createReactPlugin(),
    createHistoryPlugin(),

    // Basic Elements
    createParagraphPlugin(),
    createHeadingPlugin(),

    // Marks
    createBasicMarksPlugin(),

    // Functionality
    createAutoformatPlugin(autoFormatConfig),
    createExitBreakPlugin({
      options: {
        rules: [
          {
            hotkey: "mod+enter",
          },
          {
            hotkey: "mod+shift+enter",
            before: true,
          },
          {
            hotkey: "enter",
            query: {
              start: true,
              end: true,
              allow: KEYS_HEADING,
            },
            relative: true,
            level: 1,
          },
        ],
      },
    }),
    createNodeIdPlugin(),
    createResetNodePlugin({
      options: {
        rules: [
          {
            ...resetBlockTypesCommonRule,
            hotkey: "Enter",
            predicate: isBlockAboveEmpty,
          },
          {
            ...resetBlockTypesCommonRule,
            hotkey: "Backspace",
            predicate: isSelectionAtBlockStart,
          },
          {
            ...resetBlockTypesCodeBlockRule,
            hotkey: "Enter",
            predicate: isCodeBlockEmpty,
          },
          {
            ...resetBlockTypesCodeBlockRule,
            hotkey: "Backspace",
            predicate: isSelectionAtCodeBlockStart,
          },
        ],
      },
    }),
    createSelectOnBackspacePlugin({
      options: {
        query: {
          allow: [ELEMENT_IMAGE, ELEMENT_HR],
        },
      },
    }),
    createSoftBreakPlugin({
      options: {
        rules: [
          { hotkey: "shift+enter" },
          {
            hotkey: "enter",
            query: {
              allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
            },
          },
        ],
      },
    }),
    createTrailingBlockPlugin({
      options: { type: ELEMENT_PARAGRAPH },
    }),
    createNormalizeTypesPlugin({
      options: {
        rules: [{ path: [0], strictType: ELEMENT_H1 }],
      },
    }),
  ],
  {
    components: withPlaceholders({
      [ELEMENT_PARAGRAPH]: ParagraphElement,
      [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
      [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
      [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
      [ELEMENT_H4]: withProps(HeadingElement, { variant: "h4" }),
      [ELEMENT_H5]: withProps(HeadingElement, { variant: "h5" }),
      [ELEMENT_H6]: withProps(HeadingElement, { variant: "h6" }),

      [MARK_BOLD]: BoldLeaf,
      [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
      [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),
      [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: "sup" }),
      [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: "sub" }),
      [MARK_CODE]: CodeLeaf,
    }),
  },
);
