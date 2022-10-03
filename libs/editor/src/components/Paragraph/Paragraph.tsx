import {
  isCollapsed,
  isElementEmpty,
  useEditorState,
} from '@udecode/plate-core';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { useFocused, useSelected } from 'slate-react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

const styles = cva(['py-1', 'dark:text-zinc-200', 'text-zinc-800'], {
  variants: {
    placeholder: {
      true: [
        "before:content-['Type_something...']",
        'before:block',
        'before:cursor-text',
        'before:absolute',
        'before:opacity-25',
      ],
    },
  },
});

export const Paragraph: FC<EditorRenderElementProps> = ({
  children,
  attributes,
  element,
}) => {
  const focused = useFocused();
  const selected = useSelected();
  const editor = useEditorState();

  const isEmptyBlock = element && isElementEmpty(editor, element);

  const placeholderEnabled =
    isEmptyBlock && isCollapsed(editor.selection) && focused && selected;

  return (
    <p className={styles({ placeholder: placeholderEnabled })} {...attributes}>
      {children}
    </p>
  );
};
