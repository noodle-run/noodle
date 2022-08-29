import {
  createPluginFactory,
  getNode,
  isElement,
  setElements,
} from '@udecode/plate-core';
import { ELEMENT_H1 } from '@udecode/plate-heading';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';

export const createForcedLayoutPlugin = createPluginFactory({
  key: 'forcedLayout',
  withOverrides: (editor) => {
    const { normalizeNode } = editor;

    editor.normalizeNode = ([currentNode, currentPath]) => {
      if (!currentPath.length) {
        const title = getNode(editor, [0]);

        if (title) {
          if (isElement(title) && title.type !== ELEMENT_H1) {
            setElements(editor, { type: ELEMENT_H1 }, { at: [0] });
          }
        }

        const belowTitle = getNode(editor, [1]);

        if (belowTitle) {
          if (isElement(belowTitle) && belowTitle.type === ELEMENT_H1) {
            setElements(editor, { type: ELEMENT_PARAGRAPH }, { at: [1] });
          }
        }
      }

      return normalizeNode([currentNode, currentPath]);
    };

    return editor;
  },
});
