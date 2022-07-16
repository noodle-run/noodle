import { useCallback } from 'react';
import { RenderElementProps } from 'slate-react';
import { Heading1 } from './Heading1';
import { Paragraph } from './Paragraph';

export const useRenderElements = () =>
  useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'h1':
        return <Heading1 {...props} />;
      default:
        return <Paragraph {...props} />;
    }
  }, []);
