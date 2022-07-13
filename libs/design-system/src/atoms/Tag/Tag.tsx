import { Colors, styled } from '@noodle/stitches';
import { FC } from 'react';

const Wrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$1',
});

const Circle = styled('div', {
  height: '$5',
  width: '$5',
  borderRadius: '$full',
});

const TagText = styled('div', {
  fontSize: '$sm',
  color: '$gray11',
});

type TagProps = {
  readonly color?: Colors;
  readonly text?: string;
};

export const Tag: FC<TagProps> = ({ color = 'gray', text = '' }) => (
  <Wrapper>
    <Circle
      role="presentation"
      data-testid={`$${color}10`}
      css={{ backgroundColor: `$${color}10` }}
    />
    {text && <TagText>{text}</TagText>}
  </Wrapper>
);
