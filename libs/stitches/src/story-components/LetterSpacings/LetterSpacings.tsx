import { styled } from '../../stitches.config';
import { letterSpacings } from '../../typography';

const Name = styled('p', {
  pt: '$3',
  pb: '$2',
  opacity: 0.5,
});

const Text = styled('p', {
  fontSize: '$2xl',
});

export const LetterSpacings = () => (
  <div>
    {Object.keys(letterSpacings).map((spacing) => (
      <div key={spacing}>
        <Name>{spacing}:</Name>
        <Text css={{ letterSpacing: `$${spacing}` }}>
          The quick brown fox jumped over the lazy dog.
        </Text>
      </div>
    ))}
  </div>
);
