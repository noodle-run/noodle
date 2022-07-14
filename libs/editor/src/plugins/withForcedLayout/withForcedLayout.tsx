import { Editor, Node } from 'slate';
import { enforceType } from '../../utils/enforceType';

export const withForcedLayout = (editor: Editor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const [child, childPath] of Node.children(editor, path)) {
        const slateIndex = childPath[0];

        if (slateIndex === 0) {
          enforceType(editor, child, childPath, 'h1');
        } else if (slateIndex === 1) {
          enforceType(editor, child, childPath, 'p');
        }
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};
