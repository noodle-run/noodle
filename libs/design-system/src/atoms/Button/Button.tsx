import { styled } from '@noodle/stitches';
import { FC, ReactNode } from 'react';

const StyledButton = styled('button', {
  backgroundColor: '$pink10',
});

type ButtonProps = {
  readonly children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ children }) => (
  <StyledButton>{children}</StyledButton>
);
