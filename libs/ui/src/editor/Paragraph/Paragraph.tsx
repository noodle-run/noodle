import { isCollapsed, isElementEmpty, useEditorState } from '@udecode/plate';
import { FC } from 'react';
import { useFocused, useSelected } from 'slate-react';
import { twMerge } from 'tailwind-merge';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

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
    <p
      className={twMerge(
        'py-3 dark:text-zinc-300 text-zinc-700',
        placeholderEnabled &&
          "before:content-['Type_something...'] before:block before:cursor-text before:absolute before:opacity-25",
      )}
      {...attributes}
    >
      {children}
    </p>
  );
};
