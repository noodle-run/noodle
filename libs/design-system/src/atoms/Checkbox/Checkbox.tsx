import { styled } from '@noodle/stitches';
import { FC } from 'react';
import { FiCheck } from 'react-icons/fi';

type CheckboxProps = {
  isChecked?: boolean;
};

const Icon = styled(FiCheck, {
  stroke: 'white',
});

const CheckboxContainer = styled('div', {
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  height: '1.5rem',
  width: '1.5rem',
  borderRadius: '40%',
  border: '1px solid $gray12',
  transition: '$colors',
  variants: {
    color: {
      checked: {
        border: '1px solid $blue9',
        backgroundColor: '$blue9',
      },
    },
  },
});
export const Checkbox: FC<CheckboxProps> = ({ isChecked = false }) => {
  const variant = isChecked ? 'checked' : undefined;

  if (isChecked) {
    return (
      <CheckboxContainer
        data-testid={`${variant || 'default'}`}
        color={variant}
      >
        <Icon role="button" />
      </CheckboxContainer>
    );
  }
  return (
    <CheckboxContainer
      data-testid={`${variant || 'default'}`}
      color={variant}
    />
  );
};

export default Checkbox;
