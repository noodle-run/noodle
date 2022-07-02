import { Colors, styled } from '@noodle/stitches';
import { FC } from 'react';

const Wrapper = styled('div', {
  width: '$full',
  height: '$4',
  borderRadius: '$full',
  backgroundColor: '$gray3',
});

const Progress = styled('div', {
  height: '$full',
  borderRadius: '$full',
});

type ProgressBarProps = {
  readonly progress: number;
  readonly color?: Colors;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  color = 'gray',
}) => {
  const backgroundColor = `$${color}10`;
  const width = `${progress}%`;
  return (
    <Wrapper data-testid={backgroundColor}>
      <Progress data-testid={width} css={{ width, backgroundColor }} />
    </Wrapper>
  );
};
