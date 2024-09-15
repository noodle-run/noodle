import type { PlateRenderElementProps } from '@udecode/plate-common/react';

import { cn } from '@udecode/cn';
import {
  useIndentTodoListElement,
  useIndentTodoListElementState,
} from '@udecode/plate-indent-list/react';

import { Checkbox } from '@/primitives/checkbox';

export const TodoMarker = ({
  element,
}: Omit<PlateRenderElementProps, 'children'>) => {
  const state = useIndentTodoListElementState({ element });
  const { checkboxProps } = useIndentTodoListElement(state);

  return (
    <div contentEditable={false}>
      <Checkbox
        style={{ left: -24, position: 'absolute', top: 4 }}
        {...checkboxProps}
      />
    </div>
  );
};

export const TodoLi = ({ children, element }: PlateRenderElementProps) => {
  return (
    <span
      className={cn(
        (element['checked'] as boolean) && 'text-gray-solid-hover line-through',
      )}
    >
      {children}
    </span>
  );
};
