import { styled } from '@noodle/stitches';
import { ComponentProps, FC } from 'react';
import { Profile } from '../../atoms';

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const LeftSideWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
});

const Name = styled('h6', {
  fontSize: '$sm',
  color: '$gray11',
});

const Course = styled('p', {
  fontSize: '$xs',
  color: '$gray9',
});

type ProfileCardProps = ComponentProps<typeof Profile> & {
  name: string;
  course: string;
};

export const ProfileCard: FC<ProfileCardProps> = ({ src, name, course }) => (
  <Wrapper>
    <LeftSideWrapper>
      <Profile src={src} />
      <ContentWrapper>
        <Name>{name}</Name>
        <Course>{course}</Course>
      </ContentWrapper>
    </LeftSideWrapper>
  </Wrapper>
);
