import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

const styles = cva([
  'pl-3',
  'my-3',
  'border-l-2',
  'text-zinc-700',
  'dark:text-zinc-300',
  'dark:border-zinc-300',
  'border-zinc-700',
]);

export const Blockquote: FC<EditorRenderElementProps> = ({
  children,
  attributes,
}) => (
  <blockquote {...attributes} className={styles()}>
    {children}
  </blockquote>
);
