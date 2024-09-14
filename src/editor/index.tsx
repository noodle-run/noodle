'use client';

import {
  createPlateEditor,
  ParagraphPlugin,
  Plate,
} from '@udecode/plate-common/react';
import { Editor } from './ui/editor';
import { createPlateUI } from './ui/components';
import { plugins } from './plugins';
import { HEADING_KEYS } from '@udecode/plate-heading';
import type { Value } from '@udecode/plate-common';

const initialValue = [
  {
    type: HEADING_KEYS.h1,
    children: [{ text: '' }],
  },
  {
    type: ParagraphPlugin.key,
    children: [{ text: '' }],
  },
];

export const PlateEditor = () => {
  const localValue =
    typeof window !== 'undefined' && localStorage.getItem('editorContent');

  const editor = createPlateEditor({
    value: localValue ? (JSON.parse(localValue) as Value) : initialValue,
    plugins,
    override: {
      components: createPlateUI(),
    },
  });

  return (
    <Plate
      editor={editor}
      onChange={({ value }) => {
        console.log(value);
        localStorage.setItem('editorContent', JSON.stringify(value));
      }}
    >
      <Editor focusRing={false} variant="ghost" placeholder="Type here..." />
    </Plate>
  );
};
