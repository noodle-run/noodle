import { Colors, styled } from '@noodle/stitches';
import { ComponentProps } from 'react';
import { FiClock } from 'react-icons/fi';
import { Label } from '../../atoms';

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const SectionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
});

const LeftSideWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  gap: '$3',
});

const RightSideWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'right',
  justifyContent: 'flex-start',
  margin: '$1',
});

const Icon = styled(FiClock, {
  fill: 'light',
  stroke: 'gray12',
});

const ColoredBar = styled('div', {
  width: '$1',
  borderRadius: '$full',
  marginRight: '$1',
});

const Text = styled('p', {
  fontSize: '$sm',
  color: '$gray11',
  pt: '$1',
  pb: '$1',
});

const SubText = styled('p', {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'left',
  fontSize: '$xs',
  color: '$gray9',
  pt: '$1',
  pb: '$1',
  gap: '$1',
});

type CalendarEventProps = ComponentProps<typeof Label> & {
  label: string;
  startTime: string;
  endTime: string;
  barColor: Colors;
};

export const CalendarEvent: React.FC<CalendarEventProps> = ({
  label,
  startTime,
  endTime,
  children,
  color,
  barColor,
}) => (
  <Wrapper>
    <LeftSideWrapper>
      <ColoredBar style={{ backgroundColor: barColor }} />
      <SectionWrapper>
        <Text>{label}</Text>
        <SubText>
          <Icon />
          {startTime} - {endTime}
        </SubText>
      </SectionWrapper>
    </LeftSideWrapper>
    <RightSideWrapper>
      {children && <Label color={color}>{children}</Label>}
    </RightSideWrapper>
  </Wrapper>
);
