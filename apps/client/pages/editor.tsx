import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const EditorComponent = dynamic<unknown>(() => import('@noodle/editor'), {
  suspense: true,
});

const Editor: NextPage = () => (
  <main className="max-w-2xl py-8 mx-auto">
    <Suspense fallback={<div>Loading...</div>}>
      <EditorComponent />
    </Suspense>
  </main>
);

export default Editor;
