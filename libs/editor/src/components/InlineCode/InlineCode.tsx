import { FC } from 'react';
import { EditorRenderLeafProps } from '../../utils/EditorComponentProps';

export const InlineCode: FC<EditorRenderLeafProps> = ({
  children,
  attributes,
}) => (
  <code
    className="inline-block rounded-lg bg-zinc-200 px-2 py-[2px] dark:bg-zinc-700"
    {...attributes}
  >
    {children}
  </code>
);
