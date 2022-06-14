import { styled } from '@noodle/stitches';
import { FC, ReactNode } from 'react';

const Wrapper = styled('div', {
  backgroundColor: '$gray3',
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  fontSize: '$sm',
  variants: {
    variant: {
      noicon: {
        px: '$2',
        py: '$1',
      },
      icon: {
        p: '$1',
      },
    },
  },
});

const Field = styled('input', {
  flex: 1,
  border: 'none',
  outline: 'none',
  color: '$gray12',
});

const Icon = styled('span', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$gray5',
  borderRadius: '$full',
  padding: '$1',
  color: '$gray11',
});

type InputProps = {
  readonly icon?: ReactNode;
  readonly value?: string;
  readonly onChange?: (newValue: string) => void;
};

export const Input: FC<InputProps> = ({ icon, value, onChange }) => (
  <Wrapper variant={icon ? 'icon' : 'noicon'}>
    {icon && <Icon role="presentation">{icon}</Icon>}
    <Field
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.value);
        }
      }}
    />
  </Wrapper>
);
