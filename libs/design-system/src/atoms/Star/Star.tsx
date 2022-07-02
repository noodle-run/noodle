import { styled } from '@noodle/stitches';
import { FC } from 'react';
import { FiStar } from 'react-icons/fi';

const Icon = styled(FiStar, {
  fill: 'transparent',
  stroke: '$gray12',
  transition: '$colors',
  variants: {
    color: {
      filled: {
        fill: '$amber10',
        stroke: '$amber10',
      },
    },
  },
});

type StarProps = {
  size?: number;
  filled?: boolean;
};

export const Star: FC<StarProps> = ({ size = 24, filled = false }) => {
  const variant = filled ? 'filled' : undefined;
  return (
    <Icon
      role="button"
      data-testid={`${size}-${variant || 'default'}`}
      color={variant}
      size={size}
    />
  );
};
