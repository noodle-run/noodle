import { Descendant, Editor, Element, Path, Transforms } from 'slate';
import { ElementTypes } from '../editor.types';

export const enforceType = (
  editor: Editor,
  child: Descendant,
  childPath: Path,
  nodeType: ElementTypes,
) => {
  if (Element.isElement(child) && child.type !== nodeType) {
    const newProperties: Partial<Element> = { type: nodeType };
    Transforms.setNodes<Element>(editor, newProperties, {
      at: childPath,
    });
  }
};
