import { shadows } from '../../shadows';
import { styled } from '../../stitches.config';

const Wrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$6',
});

const Box = styled('div', {
  height: '$28',
  display: 'grid',
  placeItems: 'center',
  color: '$gray12',
  background: '$gray1',
});

export const Shadows = () => (
  <Wrapper>
    {Object.keys(shadows).map((shadow) => (
      <Box key={shadow} css={{ boxShadow: `$${shadow}` }}>
        {shadow}
      </Box>
    ))}
  </Wrapper>
);
