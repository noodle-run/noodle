import { styled } from '../../stitches.config';
import { fontSizes } from '../../typography';

const Text = styled('p', {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  lineHeight: '$relaxed',
});

export const FontSizes = () => (
  <div>
    {Object.keys(fontSizes).map((size) => (
      <Text key={size} css={{ fontSize: `$${size}` }}>
        The quick brown fox jumped over the lazy dog.
      </Text>
    ))}
  </div>
);
