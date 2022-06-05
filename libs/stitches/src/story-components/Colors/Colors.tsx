import { light, lightGroups } from '../../colors/light';
import { styled } from '../../stitches.config';

const GroupWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  py: '10px',
});

const ColorBox = styled('div', {
  height: '$16',
  width: '$16',
  borderRadius: '$md',
});

const ColorName = styled('p', {
  fontSize: '$sm',
  paddingBottom: '$2',
  color: '$gray9',
});

const GroupName = styled('h1', {
  fontSize: '$2xl',
  pt: '$3',
});

const keys = Object.keys(light);

export const Colors = () => (
  <div>
    {lightGroups.map((group) => (
      <div key={group}>
        <GroupName>{group[0].toUpperCase() + group.slice(1)}</GroupName>
        <GroupWrapper>
          {keys
            .filter((key) => key.includes(group))
            .map((color) => (
              <div key={color}>
                <ColorName>{color}</ColorName>
                <ColorBox css={{ backgroundColor: `$${color}` }} />
              </div>
            ))}
        </GroupWrapper>
      </div>
    ))}
  </div>
);
