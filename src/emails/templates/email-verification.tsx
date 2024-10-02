import { Heading, Img, Link, Text } from '@react-email/components';
import { BaseEmailLayout } from '../layouts/Base';
import { emailBaseUrl } from '../utils';

interface Props {
  name: string;
  verificationLink: string;
}

export default function EmailVerificationEmail({
  name,
  verificationLink,
}: Props) {
  return (
    <BaseEmailLayout
      title="Sign in to Noodle"
      previewText={`Hey ${name}, you have requested to sign in to Noodle.`}
      className="py-8"
    >
      <Img
        src={`${emailBaseUrl()}/logo.svg`}
        width={50}
        height={50}
        alt="Noodle logo"
      />
      <Heading as="h1" className="my-0 pb-0 pt-6 font-medium">
        Sign in to Noodle
      </Heading>
      <Text>
        We received a request to sign in to Noodle using this email address. To
        complete the sign-in process, please click the button below to verify
        your email:
      </Text>
      <Link
        href={verificationLink}
        className="my-2 inline-block rounded-md bg-black px-3 py-2 text-sm text-white"
      >
        Complete sign in
      </Link>
      <Text>
        If you can&apos;t click the button, copy and paste the following link
        into your browser:
      </Text>
      <Link href={verificationLink} className="text-pink-solid">
        {verificationLink}
      </Link>
      <Text>If you did not request this email you can safely ignore it.</Text>
    </BaseEmailLayout>
  );
}

EmailVerificationEmail.PreviewProps = {
  name: 'John',
  verificationLink: 'https://example.com/verify?token=abc123',
};
