import { Colors, styled } from '@noodle/stitches';
import { ProgressBar } from '../../atoms';

const Wrapper = styled('div', {
  borderRadius: '$2xl',
  backgroundColor: '$gray4',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '$lg',
});

const ContentWrapper = styled('div', {
  margin: '$5 $7',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const SectionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
});

const Emoji = styled('div', {
  fontSize: '$lg',
});

const ModuleName = styled('h6', {
  fontSize: '$lg',
  color: '$gray12',
});

const ModuleCode = styled('p', {
  fontSize: '$base',
  color: '$gray11',
});

const Credits = styled('p', {
  fontSize: '$xs',
  color: '$gray11',
});

const TasksRemaining = styled('p', {
  fontSize: '$sm',
  color: '$gray9',
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
      <SectionWrapper>
        <ModuleCode>{moduleCode}</ModuleCode>
        <Credits>{credits} Credits</Credits>
      </SectionWrapper>
      <SectionWrapper>
        <TasksRemaining>{tasksRemaining} Tasks remaining</TasksRemaining>
        <ProgressBar progress={progress} color={progressBarColor} />
      </SectionWrapper>
    </ContentWrapper>
  </Wrapper>
);
