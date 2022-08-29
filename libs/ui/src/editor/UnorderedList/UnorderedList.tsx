import { FC } from 'react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

export const UnorderedList: FC<EditorRenderElementProps> = ({
  attributes,
  children,
}) => (
  <ul className="pl-6 list-disc" {...attributes}>
    {children}
  </ul>
);
