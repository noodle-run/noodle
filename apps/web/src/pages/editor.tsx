import { NoodleEditor } from '@noodle/editor';

import { type NextPageWithLayout } from '@/utils/NextPageWithLayout';

const Editor: NextPageWithLayout = () => {
  return <NoodleEditor />;
};

Editor.getLayout = (page) => (
  <main className="mx-auto max-w-3xl py-12">{page}</main>
);

export default Editor;
