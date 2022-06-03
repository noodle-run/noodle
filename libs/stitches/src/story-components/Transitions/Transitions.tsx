import { styled } from '../../stitches.config';

const Box = styled('div', {
  width: '$full',
  height: '$20',
  backgroundColor: '$pink10',
  transition: '$default',
  borderRadius: '$2xl',
  display: 'grid',
  placeItems: 'center',
  fontWeight: '$bold',
  letterSpacing: '$wide',
  marginTop: '$3',
  textAlign: 'center',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

export const Transitions = () => (
  <Box>
    Hover Me!
    <br />
    Observe how my size changes smoothly, that&apos;s the transition!
  </Box>
);
