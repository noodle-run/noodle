import { useMemo } from 'react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';

const initialValue: Descendant[] = [
  {
    children: [{ text: '' }],
  },
];

export const Editor = () => {
  const editor = useMemo(
    () => withHistory(withReact(createEditor() as ReactEditor)),
    [],
  );

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable placeholder="Type..." />
    </Slate>
  );
};
