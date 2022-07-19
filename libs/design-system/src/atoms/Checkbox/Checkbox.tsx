import { styled } from '@noodle/stitches';
import { Indicator, Root } from '@radix-ui/react-checkbox';
import { FC } from 'react';
import { FiCheck } from 'react-icons/fi';

const CheckboxContainer = styled(Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$6',
  width: '$6',
  borderRadius: '$lg',
  transition: '$colors',
  variants: {
    color: {
      checked: {
        border: '1px solid $blue9',
        backgroundColor: '$blue9',
      },
      default: {
        border: '1px solid $gray12',
      },
    },
  },
});

const IconWrapper = styled('span', {
  height: '$full',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

type CheckboxProps = {
  checked?: boolean;
};

export const Checkbox: FC<CheckboxProps> = ({ checked = false }) => {
  const variant = checked ? 'checked' : 'default';
  return (
    <CheckboxContainer data-testid={variant} checked={checked} color={variant}>
      {checked && (
        <Indicator asChild>
          <IconWrapper>
            <FiCheck color="white" />
          </IconWrapper>
        </Indicator>
      )}
    </CheckboxContainer>
  );
};
