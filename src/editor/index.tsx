'use client';

import { createPlateEditor, Plate } from '@udecode/plate-common/react';
import { Editor } from './ui/editor';
import { createPlateUI } from './ui/components';
import { plugins } from './plugins';

export const PlateEditor = () => {
  const editor = createPlateEditor({
    plugins,
    override: {
      components: createPlateUI(),
    },
  });

  return (
    <Plate editor={editor}>
      <Editor
        focusRing={false}
        className="max-w-2xl"
        variant="ghost"
        placeholder="Type here..."
      />
    </Plate>
  );
};
