import { styled } from '../../stitches.config';
import { lineHeights } from '../../typography';

const Name = styled('p', {
  paddingTop: '$6',
  paddingBottom: '$2',
  opacity: 0.5,
});

const Text = styled('p', {});

export const LineHeights = () => (
  <div>
    {Object.keys(lineHeights).map((height) => (
      <div key={height}>
        <Name>{height}:</Name>
        <Text css={{ lineHeight: `$${height}` }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis
          interdum libero, ut semper quam. Nullam nec ex a turpis tincidunt
          feugiat a faucibus turpis. Donec vulputate lobortis dui et viverra.
        </Text>
      </div>
    ))}
  </div>
);
