import { useMemo } from 'react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import { useRenderElements } from './elements';
import { withForcedLayout } from './plugins/withForcedLayout/withForcedLayout';

const initialValue: Descendant[] = [
  {
    type: 'h1',
    children: [{ text: '' }],
  },
];

export const Editor = () => {
  const editor = useMemo(
    () => withForcedLayout(withHistory(withReact(createEditor()))),
    [],
  );

  const elements = useRenderElements();

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable placeholder="Untitled" renderElement={elements} />
    </Slate>
  );
};
