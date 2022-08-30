import { FC } from 'react';
import { EditorRenderLeafProps } from '../../utils/EditorComponentProps';

export const Strikethrough: FC<EditorRenderLeafProps> = ({
  children,
  attributes,
}) => (
  <del className="line-through" {...attributes}>
    {children}
  </del>
);
