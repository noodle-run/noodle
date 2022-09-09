import Image from 'next/image';
import { FC, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { z } from 'zod';
import { Brand } from '../../atoms/Brand';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';

type AuthProps = {
  onMagicLinkLogin: (email: string) => void;
  onGithubLogin: () => void;
  onGoogleLogin: () => void;
};

export const Auth: FC<AuthProps> = ({
  onGithubLogin,
  onGoogleLogin,
  onMagicLinkLogin,
}) => {
  const [email, setEmail] = useState('');
  const isEmail = z.string().email();

  return (
    <main className="flex items-center justify-center min-h-screen px-6 md:px-0">
      <div className="flex flex-col items-center">
        <Brand size={50} />
        <h1 className="mt-3 text-2xl font-extrabold text-center md:text-3xl">
          Welcome to Noodle!
        </h1>
        <p className="max-w-sm pt-2 text-sm text-center dark:text-zinc-300 text-zinc-700 md:text-base">
          Enter your email address or use one of the social media options to log
          back in or register!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onMagicLinkLogin(email);
          }}
          className="flex flex-col items-stretch w-full gap-3 mt-6"
        >
          <Input
            type="email"
            placeholder="Enter your email"
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
        <div className="flex items-center justify-between my-3 md:my-6">
          <span className="h-[1px] w-12 inline-block bg-zinc-700" />
          <p className="mx-3 dark:text-zinc-300 text-zinc-700">OR</p>
          <span className="h-[1px] w-12 inline-block bg-zinc-700" />
        </div>
        <div className="flex flex-col items-stretch w-full gap-3">
          <Button onClick={onGithubLogin} icon={<FaGithub size={20} />}>
            Continue with Github
          </Button>
          <Button
            onClick={onGoogleLogin}
            icon={<Image src="/Google__G__Logo.svg" width={20} height={20} />}
            variant="white"
          >
            Continue with Google
          </Button>
        </div>
      </div>
    </main>
  );
};
