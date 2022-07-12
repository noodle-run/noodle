import { Colors, styled } from '@noodle/stitches';
import { Label, Star, TimeSince } from '../../atoms';

const Wrapper = styled('div', {
  display: 'inline-flex',
  borderRadius: '$2xl',
  backgroundColor: '$gray4',
  boxShadow: '$lg',
  alignItems: 'center',

  transition: '$default',

  '&:hover': {
    // transitioning the scale on hover
    transform: 'scale(1.005)',
  },
});

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '$3 $7',
  gap: '$96',
});

const SectionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '$1',
  gap: '$5',
});

const NoteTitle = styled('h6', {
  fontSize: '$lg',
  color: '$gray11',
});

type EditedNoteCardProps = {
  noteTitle: string;
  lastEdited: Date;
  labelName: string;
  labelColor: Colors;
  isStarred: boolean;
};

export const EditedNoteCard: React.FC<EditedNoteCardProps> = ({
  noteTitle,
  lastEdited,
  labelName,
  labelColor,
  isStarred,
}) => (
  <Wrapper>
    <ContentWrapper>
      <NoteTitle>{noteTitle}</NoteTitle>
      <SectionWrapper>
        <TimeSince date={lastEdited} />
        <Label color={labelColor}>{labelName}</Label>
        <Star filled={isStarred} />
      </SectionWrapper>
    </ContentWrapper>
  </Wrapper>
);
