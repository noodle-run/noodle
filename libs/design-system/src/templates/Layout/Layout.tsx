import { styled } from '@noodle/stitches';
import { FC, ReactNode } from 'react';

const Wrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: '256px 1fr',
  minHeight: '100vh',
  width: '100vw',
  overflowX: 'hidden',
  p: '$6',
  gap: '$6',
});

const ContentWrapper = styled('div', {
  p: '$6',
  border: '1px solid $gray3',
  borderRadius: '$3xl',
});

const SideMenuWrapper = styled('div', {
  p: '$4',
});

type LayoutProps = {
  readonly sidemenu: ReactNode;
  readonly children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ sidemenu, children }) => (
  <Wrapper>
    <SideMenuWrapper>{sidemenu}</SideMenuWrapper>
    <ContentWrapper>{children}</ContentWrapper>
  </Wrapper>
);
