import { FC } from 'react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

export const OrderedList: FC<EditorRenderElementProps> = ({
  attributes,
  children,
}) => (
  <ol className="list-decimal py-1 pl-6" {...attributes}>
    {children}
  </ol>
);
