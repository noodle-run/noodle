import { Colors, styled } from '@noodle/stitches';
import { FC } from 'react';

const Circle = styled('div', {
  height: '$5',
  width: '$5',
  borderRadius: '$full',
});

type TagProps = {
  readonly color?: Colors;
};

export const Tag: FC<TagProps> = ({ color = 'gray' }) => (
  <Circle
    role="presentation"
    data-testid={`$${color}10`}
    css={{ backgroundColor: `$${color}10` }}
  />
);
