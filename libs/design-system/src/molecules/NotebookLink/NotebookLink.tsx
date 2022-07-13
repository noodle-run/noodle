import { Colors, styled } from '@noodle/stitches';
import Link from 'next/link';
import { Label, Star, TimeSince } from '../../atoms';

const Wrapper = styled('div', {
  display: 'flex',
  borderRadius: '$xl',
  backgroundColor: '$gray2',
  boxShadow: '$lg',
  alignItems: 'center',

  transition: '$colors',

  '&:hover': {
    backgroundColor: '$gray3',
  },
});

const SectionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '$1',
  gap: '$5',
  p: '$3 $7 $3 0px',
});

const LeftSideWrapper = styled('div', {
  display: 'flex',
  flex: 1,
});

const NoteTitle = styled('a', {
  fontSize: '$lg',
  color: '$gray10',
  flex: 1,
  p: '$3 0px $3 $7',
});

type EditedNoteCardProps = {
  href: string;
  title: string;
  lastEdited: Date;
  label: string;
  labelColor: Colors;
  isStarred: boolean;
};

export const EditedNoteCard: React.FC<EditedNoteCardProps> = ({
  href,
  title,
  lastEdited,
  label,
  labelColor,
  isStarred,
}) => (
  <Wrapper>
    <LeftSideWrapper>
      <Link href={href} style={{ flex: 1 }}>
        <NoteTitle>{title}</NoteTitle>
      </Link>
    </LeftSideWrapper>
    <SectionWrapper>
      <TimeSince date={lastEdited} />
      <Label color={labelColor}>{label}</Label>
      <Star filled={isStarred} />
    </SectionWrapper>
  </Wrapper>
);
