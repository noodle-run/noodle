import { withProps } from '@udecode/cn';
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import type { NodeComponent } from '@udecode/plate-common/react';
import {
  ParagraphPlugin,
  PlateElement,
  PlateLeaf,
} from '@udecode/plate-common/react';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { HeadingElement } from './elements/heading';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { BlockquoteElement } from './elements/blockquote';
import { withPlaceholders } from './placeholder';
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from '@udecode/plate-code-block/react';
import { CodeBlockElement } from './elements/code-block';
import { CodeLineElement } from './elements/code-block/code-line-element';
import { CodeSyntaxLeaf } from './elements/code-block/code-syntax-leaf';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { HrElement } from './elements/hr';

export const createPlateUI = () => {
  const components: Record<string, NodeComponent> = withPlaceholders({
    [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: 'h1' }),
    [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: 'h2' }),
    [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: 'h3' }),
    [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: 'h4' }),
    [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: 'h5' }),
    [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: 'h6' }),

    [BlockquotePlugin.key]: BlockquoteElement,

    [CodeBlockPlugin.key]: CodeBlockElement,
    [CodeLinePlugin.key]: CodeLineElement,
    [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,

    [HorizontalRulePlugin.key]: HrElement,

    [ParagraphPlugin.key]: withProps(PlateElement, {
      as: 'p',
      className: 'text-foreground-muted leading-7 m-0 px-0',
    }),
    [BoldPlugin.key]: withProps(PlateLeaf, {
      as: 'strong',
      className: '!font-semibold text-foreground',
    }),
    [ItalicPlugin.key]: withProps(PlateLeaf, {
      as: 'em',
      className: 'text-foreground',
    }),
    [UnderlinePlugin.key]: withProps(PlateLeaf, {
      as: 'u',
      className: 'text-foreground',
    }),
    [StrikethroughPlugin.key]: withProps(PlateLeaf, {
      as: 's',
      className: 'text-foreground',
    }),
    [SubscriptPlugin.key]: withProps(PlateLeaf, {
      as: 'sub',
      className: 'text-foreground',
    }),
    [SuperscriptPlugin.key]: withProps(PlateLeaf, {
      as: 'sup',
      className: 'text-foreground',
    }),
    [CodePlugin.key]: withProps(PlateLeaf, {
      as: 'code',
      className:
        'text-foreground bg-gray-element border rounded-md px-1 py-0.5',
    }),
  });

  return components;
};
