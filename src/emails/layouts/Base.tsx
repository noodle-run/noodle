import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Preview,
  Tailwind,
} from '@react-email/components';
import { emailTailwindConfig } from '../tailwind';
import type { PropsWithChildren } from 'react';
import { emailBaseUrl } from '../utils';
import { cn } from '@/utils/cn';

type Props = PropsWithChildren<{
  title: string;
  previewText: string;
  className?: string;
}>;

export const BaseEmailLayout = ({
  children,
  title,
  previewText,
  className,
}: Props) => {
  return (
    <Tailwind config={emailTailwindConfig}>
      <Html lang="en" dir="ltr">
        <Head>
          <title>{title}</title>
          <Font
            fontFamily="Geist Mono"
            fallbackFontFamily="monospace"
            webFont={{
              url: `${emailBaseUrl()}/_static/fonts/GeistMono-Variable.ttf`,
              format: 'truetype',
            }}
          />
          <Font
            fontFamily="Geist"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: `${emailBaseUrl()}/_static/fonts/Geist-Variable.ttf`,
              format: 'truetype',
            }}
          />
        </Head>
        <Preview>{previewText}</Preview>
        <Body>
          <Container className={cn('px-3', className)}>{children}</Container>
        </Body>
      </Html>
    </Tailwind>
  );
};
