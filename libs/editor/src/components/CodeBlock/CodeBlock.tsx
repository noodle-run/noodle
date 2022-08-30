import { FC } from 'react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

export const CodeBlock: FC<EditorRenderElementProps> = ({
  children,
  attributes,
}) => (
  <pre
    className="px-4 py-3 whitespace-pre-wrap rounded-lg dark:text-zinc-300 text-zinc-700 dark:bg-zinc-800 bg-zinc-100"
    {...attributes}
  >
    {children}
  </pre>
);
