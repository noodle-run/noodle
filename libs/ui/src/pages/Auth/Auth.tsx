import Image from 'next/image';
import { FC, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { z } from 'zod';
import { Brand } from '../../atoms/Brand';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Modal } from '../../molecules/Modal';

type AuthProps = {
  onMagicLinkLogin: (email: string) => void;
  onGithubLogin: () => void;
  onGoogleLogin: () => void;
  error?: string;
};

export const Auth: FC<AuthProps> = ({
  onGithubLogin,
  onGoogleLogin,
  onMagicLinkLogin,
  error,
}) => {
  const [isErrorModalOpen, setErrorModalOpen] = useState(!!error);
  const [email, setEmail] = useState('');
  const isEmail = z.string().email();

  return (
    <main className="flex min-h-screen items-center justify-center px-6 md:px-0">
      <div className="flex flex-col items-center">
        <Brand size={50} />
        <h1 className="mt-3 text-center text-2xl font-extrabold md:text-3xl">
          Welcome to Noodle!
        </h1>
        <p className="max-w-sm pt-2 text-center text-sm text-zinc-700 dark:text-zinc-300 md:text-base">
          Enter your email address or use one of the social media options to log
          back in or register!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onMagicLinkLogin(email);
          }}
          className="mt-6 flex w-full flex-col items-stretch gap-3"
        >
          <Input
            type="email"
            label="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            variant="primary"
            disabled={!isEmail.safeParse(email).success}
            icon={<FiArrowRight strokeWidth={3} />}
          >
            Let me in!
          </Button>
        </form>
        <div className="my-3 flex items-center justify-between md:my-6">
          <span className="inline-block h-[1px] w-12 bg-zinc-700" />
          <p className="mx-3 text-zinc-700 dark:text-zinc-300">OR</p>
          <span className="inline-block h-[1px] w-12 bg-zinc-700" />
        </div>
        <div className="flex w-full flex-col items-stretch gap-3">
          <Button onClick={onGithubLogin} icon={<FaGithub size={20} />}>
            Continue with Github
          </Button>
          <Button
            onClick={onGoogleLogin}
            icon={
              <Image
                src="/Google__G__Logo.svg"
                alt="Google logo"
                width={20}
                height={20}
              />
            }
            variant="white"
          >
            Continue with Google
          </Button>
        </div>
        {error === 'Not approved' && (
          <Modal
            title="Authentication denied"
            description="You have not been approved for early access just yet, we will let you know when you can sign in 🙌"
            image="/auth-denied.svg"
            alt="sad illustration"
            open={isErrorModalOpen}
            onClose={() => setErrorModalOpen(false)}
          />
        )}
      </div>
    </main>
  );
};
