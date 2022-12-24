import { FC } from 'react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

export const CodeBlock: FC<EditorRenderElementProps> = ({
  children,
  attributes,
}) => (
  <pre
    className="whitespace-pre-wrap rounded-lg bg-zinc-100 px-4 py-3 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
    {...attributes}
  >
    {children}
  </pre>
);
