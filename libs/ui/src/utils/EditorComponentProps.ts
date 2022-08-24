/*
 * These types are used to make the editor component types optional for possible
 * use cases outside of the editor.
 * The types also correctly modifies the children type to be ReactNode instead of any.
 */

import { PlateRenderElementProps, PlateRenderLeafProps } from '@udecode/plate';
import { ReactNode } from 'react';

export type EditorRenderElementProps = Partial<PlateRenderElementProps> & {
  children: ReactNode;
};

export type EditorRenderLeafProps = Partial<PlateRenderLeafProps> & {
  children: ReactNode;
};
