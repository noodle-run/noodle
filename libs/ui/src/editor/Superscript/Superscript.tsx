import { FC } from 'react';
import { EditorRenderLeafProps } from '../../utils/EditorComponentProps';

export const Superscript: FC<EditorRenderLeafProps> = ({
  children,
  attributes,
}) => <sup {...attributes}>{children}</sup>;
