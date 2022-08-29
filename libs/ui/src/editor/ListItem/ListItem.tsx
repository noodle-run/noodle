import { FC } from 'react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

export const ListItem: FC<EditorRenderElementProps> = ({
  attributes,
  children,
}) => (
  <li className="dark:text-zinc-300 text-zinc-700" {...attributes}>
    {children}
  </li>
);
