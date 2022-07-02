import { styled } from '@noodle/stitches';
import { FC, ReactNode } from 'react';

const Icon = styled('span', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$1',
  backgroundColor: '$gray5',
  borderRadius: '$full',
  boxShadow: '$md',
  transition: '$colors',
});

const Wrapper = styled('button', {
  backgroundColor: '$gray3',
  p: '$2 $4',
  borderRadius: '$full',
  fontSize: '$xs',
  color: '$gray11',
  boxShadow: '$lg',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
  transition: '$colors',
  '&:hover': {
    backgroundColor: '$gray4',
    '& span': {
      backgroundColor: '$gray6',
    },
  },
});

type ButtonProps = {
  readonly children: ReactNode;
  readonly icon?: ReactNode;
  readonly onClick?: () => void;
  readonly type?: 'button' | 'reset' | 'submit';
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  type = 'button',
}) => (
  <Wrapper type={type} onClick={onClick}>
    {children}
    {icon && <Icon>{icon}</Icon>}
  </Wrapper>
);
