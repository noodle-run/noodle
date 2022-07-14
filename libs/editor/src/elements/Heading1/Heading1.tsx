import { styled } from '@noodle/stitches';
import { FC } from 'react';
import { RenderElementProps } from 'slate-react';

const H1 = styled('h1', {
  fontSize: '$2xl',
  fontWeight: '$semiBold',
  lineHeight: '$relaxed',
});

export const Heading1: FC<RenderElementProps> = ({ attributes, children }) => (
  <H1 {...attributes}>{children}</H1>
);
