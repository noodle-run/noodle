import { FC } from 'react';
import { styled } from '../../stitches.config';

const SpaceBox = styled('div', {
  my: '$2',
  backgroundColor: '$sky10',
  height: '$6',
  borderRadius: '$md',
  minWidth: '$1',
  maxWidth: '$full',
});

const SpaceText = styled('p', {
  fontSize: '$sm',
  pt: '$3',
  opacity: 0.5,
});

interface SpacingsProps {
  entries: [string, string][];
}

export const Spacings: FC<SpacingsProps> = ({ entries }) => (
  <div>
    {entries.reverse().map(([name, value]) => (
      <div key={name}>
        <SpaceText>
          {name} - {value}
        </SpaceText>
        <SpaceBox data-testid={name} css={{ width: `$${name}` }} />
      </div>
    ))}
  </div>
);
