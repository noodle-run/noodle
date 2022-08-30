import { FC } from 'react';
import { EditorRenderLeafProps } from '../../utils/EditorComponentProps';

export const Bold: FC<EditorRenderLeafProps> = ({ children, attributes }) => (
  <strong className="font-extrabold text-black dark:text-white" {...attributes}>
    {children}
  </strong>
);
