import { space } from '../../space';
import { styled } from '../../stitches.config';

const SpaceBox = styled('div', {
  margin: '$2 0',
  backgroundColor: '$sky10',
  height: '$6',
  borderRadius: '$md',
});

const SpaceText = styled('p', {
  fontSize: '$sm',
  paddingTop: '$3',
  opacity: 0.5,
});

export const Spacings = () => (
  <div>
    {Object.entries(space)
      .reverse()
      .map(([name, value]) => (
        <div key={name}>
          <SpaceText>
            {name} - {value}
          </SpaceText>
          <SpaceBox data-testid={name} css={{ width: `$${name}` }} />
        </div>
      ))}
  </div>
);
