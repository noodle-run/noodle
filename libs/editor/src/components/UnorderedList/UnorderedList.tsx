import { FC } from 'react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

export const UnorderedList: FC<EditorRenderElementProps> = ({
  attributes,
  children,
}) => (
  <ul className="list-disc py-1 pl-6" {...attributes}>
    {children}
  </ul>
);
