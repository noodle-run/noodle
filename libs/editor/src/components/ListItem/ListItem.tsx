import { FC } from 'react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

export const ListItem: FC<EditorRenderElementProps> = ({
  attributes,
  children,
}) => (
  <li className="text-zinc-700 dark:text-zinc-300" {...attributes}>
    {children}
  </li>
);
