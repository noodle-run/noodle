import { Plate } from '@udecode/plate';

import { plugins } from './plugins';

export const NoodleEditor = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Untitled"
        className="border-gray-6 dark:border-graydark-6 placeholder:text-gray-8 dark:placeholder:text-graydark-8 mb-3 w-full border-b bg-transparent pb-3 text-4xl font-extrabold outline-none"
      />
      <Plate
        plugins={plugins}
        editableProps={{
          spellCheck: false,
          placeholder: 'Start typing...',
          style: { outline: 'none' },
        }}
      />
    </>
  );
};
