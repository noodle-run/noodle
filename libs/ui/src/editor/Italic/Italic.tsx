import { FC } from 'react';
import { EditorRenderLeafProps } from '../../utils/EditorComponentProps';

export const Italic: FC<EditorRenderLeafProps> = ({ children, attributes }) => (
  <em className="italic" {...attributes}>
    {children}
  </em>
);
