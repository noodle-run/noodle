import { Plate } from '@udecode/plate';
import { initialValue } from './initialValue';
import { plugins } from './plugins';

const Editor = () => (
  <Plate
    plugins={plugins}
    initialValue={initialValue}
    editableProps={{ placeholder: 'Untitled' }}
  />
);

export default Editor;
