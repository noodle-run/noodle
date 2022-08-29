import { FC } from 'react';
import { EditorRenderElementProps } from '../../utils/EditorComponentProps';

export const OrderedList: FC<EditorRenderElementProps> = ({
  attributes,
  children,
}) => (
  <ol className="pl-6 list-decimal" {...attributes}>
    {children}
  </ol>
);
