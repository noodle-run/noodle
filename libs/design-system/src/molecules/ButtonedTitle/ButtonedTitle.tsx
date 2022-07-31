import { styled } from '@noodle/stitches';
import { FC } from 'react';

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$5',
});

const Title = styled('h1', {
  fontSize: '$6xl',
  fontWeight: '$bold',
  letterSpacing: '2px',
});

const Subtitle = styled('h2', {
  fontSize: '$base',
  fontWeight: '$normal',
  color: '$gray11',
  textAlign: 'center',
  width: '$half',
  lineHeight: '$relaxed',
  letterSpacing: '0.2px',
});

type ButtonedTitleProps = {
  title: string;
  subtitle?: string;
};

export const ButtonedTitle: FC<ButtonedTitleProps> = ({ title, subtitle }) => (
  <Wrapper>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Wrapper>
);
