import { FC } from 'react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

export const Paragraph: FC<EditorRenderElementProps> = ({
  children,
  attributes,
}) => (
  <p className="py-3 dark:text-zinc-300 text-zinc-700" {...attributes}>
    {children}
  </p>
);
