import { Plate } from '@udecode/plate-core';
import { initialValue } from './initialValue';
import { plugins } from './plugins';

const Editor = () => (
  <Plate
    plugins={plugins}
    initialValue={initialValue}
    editableProps={{ placeholder: 'Untitled' }}
    onChange={(newValue) => console.log(JSON.stringify(newValue))}
  />
);

export default Editor;
