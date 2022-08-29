import { FC } from 'react';
import { EditorRenderLeafProps } from '../../utils/EditorComponentProps';

export const Subscript: FC<EditorRenderLeafProps> = ({
  children,
  attributes,
}) => <sub {...attributes}>{children}</sub>;
