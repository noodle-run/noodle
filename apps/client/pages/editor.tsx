import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const EditorComponent = dynamic<unknown>(() => import('@noodle/editor'), {
  suspense: true,
});

const Editor: NextPage = () => {
  return (
    <main className="max-w-2xl px-6 py-6 mx-auto md:py-8 md:px-0">
      <Suspense fallback={<div>Loading...</div>}>
        <EditorComponent />
      </Suspense>
    </main>
  );
};

export default Editor;
