import { styled } from '@noodle/stitches';
import NextLink from 'next/link';
import { FC, ReactNode } from 'react';

const Anchor = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  transition: '$colors',
  variants: {
    variant: {
      default: {
        color: '$crimson10',
        textDecoration: 'underline',
        '&:hover': {
          color: '$crimson9',
        },
      },
      sidemenu: {
        color: '$gray11',
        p: '$3',
        borderRadius: '$lg',
        '&:hover': {
          backgroundColor: '$gray2',
          color: '$gray12',
        },
      },
    },
  },
});

type LinkProps = {
  readonly href: string;
  readonly icon?: ReactNode;
  readonly text: string;
  readonly variant?: 'sidemenu' | 'default';
};

export const Link: FC<LinkProps> = ({
  href,
  icon,
  text,
  variant = 'default',
}) => (
  <NextLink href={href}>
    <Anchor data-testid={variant} variant={variant}>
      {icon} <span>{text}</span>
    </Anchor>
  </NextLink>
);
