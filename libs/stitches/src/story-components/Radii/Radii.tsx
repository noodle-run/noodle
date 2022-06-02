import { radii } from '../../radii';
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
  borderColor: '$blue10',
  borderStyle: 'solid',
  color: '$gray12',
});

export const Radii = () => (
  <Wrapper>
    {Object.keys(radii).map((borderRadius) => (
      <Box key={borderRadius} css={{ borderRadius: `$${borderRadius}` }}>
        {borderRadius}
      </Box>
    ))}
  </Wrapper>
);
