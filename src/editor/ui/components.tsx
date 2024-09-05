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

export const createPlateUI = () => {
  const components: Record<string, NodeComponent> = {
    [ParagraphPlugin.key]: withProps(PlateElement, {
      as: 'p',
      className: 'text-foreground-muted m-0 px-0 py-1',
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
      className: 'text-foreground bg-gray-subtle rounded-md px-1 py-0.5',
    }),
  };

  return components;
};
