import { styled } from '@noodle/stitches';
import { FC } from 'react';

const Circle = styled('div', {
  height: '$5',
  width: '$5',
  borderRadius: '$full',
});

type TagProps = {
  readonly color: string;
};

export const Tag: FC<TagProps> = ({ color }) => (
  <Circle
    role="presentation"
    data-testid={color}
    css={{ backgroundColor: color }}
  />
);
