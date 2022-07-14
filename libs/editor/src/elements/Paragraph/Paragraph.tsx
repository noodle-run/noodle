import { styled } from '@noodle/stitches';
import { FC } from 'react';
import { RenderElementProps } from 'slate-react';

const P = styled('p', {
  lineHeight: '$snug',
});

export const Paragraph: FC<RenderElementProps> = ({ attributes, children }) => (
  <P {...attributes}>{children}</P>
);
