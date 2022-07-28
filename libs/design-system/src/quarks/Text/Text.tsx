import { styled } from '@noodle/stitches';

export const Text = styled('p', {
  fontSize: '$base',
  fontWeight: '$normal',
  color: '$gray11',
  lineHeight: '$snug',
  variants: {
    size: {
      small: {
        fontSize: '$sm',
      },
      large: {
        fontSize: '$xl',
        fontWeight: '$semiBold',
        color: '$gray12',
      },
      title: {
        fontSize: '$3xl',
        fontWeight: '$bold',
        color: '$gray12',
      },
    },
  },
});
