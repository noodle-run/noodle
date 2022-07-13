import { Colors, styled } from '@noodle/stitches';
import { ProgressBar } from '../../atoms';

const Wrapper = styled('div', {
  borderRadius: '$2xl',
  backgroundColor: '$gray2',
  boxShadow: '$lg',
});

const ContentWrapper = styled('div', {
  padding: '$5 $7',
  display: 'flex',
  flexDirection: 'column',
});

const Emoji = styled('div', {
  fontSize: '$lg',
});

const ModuleName = styled('h6', {
  fontSize: '$lg',
  color: '$gray12',
  py: '$3',
});

const ModuleCode = styled('p', {
  fontSize: '$base',
  color: '$gray11',
});

const Credits = styled('p', {
  fontSize: '$xs',
  color: '$gray11',
  pt: '$1',
});

const TasksRemaining = styled('p', {
  fontSize: '$sm',
  color: '$gray9',
  pt: '$3',
  pb: '$1',
});

type ModuleCardProps = {
  icon: string;
  moduleName: string;
  moduleCode: string;
  credits: number;
  tasksRemaining: number;
  progress: number;
  progressBarColor: Colors;
};

export const ModuleCard: React.FC<ModuleCardProps> = ({
  icon,
  moduleName,
  moduleCode,
  credits,
  tasksRemaining,
  progress,
  progressBarColor,
}) => (
  <Wrapper>
    <ContentWrapper>
      <Emoji>{icon}</Emoji>
      <ModuleName>{moduleName}</ModuleName>
      <ModuleCode>{moduleCode}</ModuleCode>
      <Credits>{credits} Credits</Credits>
      <TasksRemaining>{tasksRemaining} Tasks remaining</TasksRemaining>
      <ProgressBar progress={progress} color={progressBarColor} />
    </ContentWrapper>
  </Wrapper>
);
