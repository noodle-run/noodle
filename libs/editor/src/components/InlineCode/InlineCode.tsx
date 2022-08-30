import { FC } from 'react';
import { EditorRenderLeafProps } from '../../utils/EditorComponentProps';

export const InlineCode: FC<EditorRenderLeafProps> = ({
  children,
  attributes,
}) => (
  <code
    className="inline-block px-2 py-[2px] rounded-lg dark:bg-zinc-700 bg-zinc-200"
    {...attributes}
  >
    {children}
  </code>
);
