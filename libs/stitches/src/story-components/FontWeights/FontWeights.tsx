import { styled } from '../../stitches.config';
import { fontWeights } from '../../typography';

const WeightName = styled('p', {
  opacity: 0.5,
  paddingTop: '$3',
});

const Text = styled('p', {
  fontSize: '$2xl',
  lineHeight: '$relaxed',
});

export const FontWeights = () => (
  <div>
    {Object.keys(fontWeights).map((weight) => (
      <div key={weight}>
        <WeightName>{weight}:</WeightName>
        <Text css={{ fontWeight: `$${weight}` }}>
          The quick brown fox jumps over the lazy dog.
        </Text>
      </div>
    ))}
  </div>
);
