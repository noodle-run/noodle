import { Colors, styled } from '@noodle/stitches';
import { FC, ReactNode } from 'react';

const Wrapper = styled('div', {
  display: 'inline-block',
  p: '$1 $3',
  fontSize: '$xs',
  borderRadius: '$full',
  color: '$gray1',
});

interface LabelProps {
  children: ReactNode;
  color: Colors;
}

export const Label: FC<LabelProps> = ({ children, color }) => (
  <Wrapper
    data-testid={`$${color}10`}
    css={{
      backgroundColor: `$${color}10`,
    }}
  >
    {children}
  </Wrapper>
);
