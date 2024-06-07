import { Heading, Img, Link, Text } from '@react-email/components';
import { BaseEmailLayout } from '../layouts/Base';
import { emailBaseUrl } from '../utils';
import { constants } from '@/constants';

interface Props {
  name: string;
  email: string;
}

export default function EarlyAccessJoinedEmail({ name, email }: Props) {
  return (
    <BaseEmailLayout
      title={`${name}, you have joined Noodle's early access list!`}
      previewText={`Hey ${name}, this is to just let you know that you have joined Noodle's early access waiting list.`}
      className="py-8"
    >
      <Img
        src={`${emailBaseUrl()}/logo.svg`}
        width={50}
        height={50}
        alt="Noodle logo"
      />
      <Heading as="h1" className="my-0 pb-0 pt-6 font-medium">
        You are on the list!
      </Heading>
      <Text className="my-0 pt-4">
        Hey {name}, Ahmed here, founder and creator of Noodle.
      </Text>
      <Text>
        I wanted to thank you for joining Noodle&apos;s early access list. I am
        super excited to have you on board and can&apos;t wait for you to start
        using Noodle.
      </Text>
      <Text>
        I am currently working hard to get Noodle ready for you and will be in
        touch soon to let you know when you can access and start using it. Just
        make sure to sign in using the same email you joined the early access
        list with, which is{' '}
        <Link className="text-pink underline underline-offset-4">{email}</Link>.
      </Text>
      <Text>
        You can join our{' '}
        <Link
          href={constants.discord}
          className="text-pink underline underline-offset-4"
        >
          Discord server
        </Link>{' '}
        in the meantime to stay up to date and to share your thoughts and
        feedback, helping shape Noodle into the best product it can be.
      </Text>
    </BaseEmailLayout>
  );
}

EarlyAccessJoinedEmail.PreviewProps = {
  firstName: 'John',
  email: 'johndoe@example.com',
};
