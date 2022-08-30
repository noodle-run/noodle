import { FC } from 'react';
import { EditorRenderLeafProps } from '../../utils/EditorComponentProps';

export const Underline: FC<EditorRenderLeafProps> = ({
  children,
  attributes,
}) => (
  <u className="underline" {...attributes}>
    {children}
  </u>
);
