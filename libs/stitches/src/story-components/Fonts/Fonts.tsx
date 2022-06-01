import { styled } from '../../stitches.config';

const Text = styled('h1', {
  fontSize: '$lg',
  fontFamily: '$body',
});

export const Fonts = () => (
  <Text>The quick brown fox jumps over the lazy dog.</Text>
);
