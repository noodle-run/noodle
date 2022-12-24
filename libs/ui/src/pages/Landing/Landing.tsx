import Image from 'next/image';
import { FC, FormEvent, useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { Modal } from '../../molecules/Modal';
import { Navbar } from '../../templates/Navbar';

const isEmail = z.string().email();

type LandingProps = {
  onWaitListFormSubmit: (email: string) => Promise<void>;
};

export const Landing: FC<LandingProps> = ({ onWaitListFormSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [waitlistFormError, setWaitListFormError] = useState<string>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmail.safeParse(email).success) {
      setWaitListFormError('Please enter a valid email address');
    } else {
      await onWaitListFormSubmit(email)
        .then(() => {
          setIsOpen(true);
          setWaitListFormError(undefined);
        })
        .catch((err: Error) => {
          setWaitListFormError(err.message);
          setIsOpen(false);
        });
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[url('/bg.svg')] bg-cover bg-bottom bg-no-repeat">
      <main className="container mx-auto px-6 py-8 md:px-0">
        <Navbar />
        <header className="pt-24 text-center">
          <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-5xl">
            Rethinking student productivity.
          </h1>
          <p className="mx-auto max-w-2xl pt-3 text-sm text-zinc-600 dark:text-zinc-400 md:text-base">
            Noodle is an open source student productivity tool, providing
            students with all the tools they need to organise their life and
            study more efficiently.
          </p>
          <div className="mt-12 flex flex-col items-center">
            <form
              onSubmit={onSubmit}
              className={twMerge(
                'flex min-w-full flex-col rounded-lg bg-zinc-200 shadow-md dark:bg-zinc-800 md:min-w-[50ch] md:flex-row md:rounded-full',
              )}
              noValidate
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-lg bg-transparent py-3 pl-6 text-sm outline-none placeholder:text-zinc-500 md:rounded-l-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="rounded-b-lg bg-primary-500 px-6 py-2 text-sm font-semibold shadow-md transition-colors md:rounded-full md:py-0"
              >
                Join waitlist!
              </button>
            </form>
            <div className="flex h-12 min-w-full justify-start text-sm text-red-500 md:min-w-[52ch]">
              {waitlistFormError && (
                <p className="flex items-center gap-3">
                  <FiAlertTriangle /> {waitlistFormError}
                </p>
              )}
            </div>
            <Modal
              image="/waitlist-illustration.svg"
              alt="waitlist illustration"
              title="You're on the waiting list!"
              description="We will send you an email as soon as Noodle is ready.
                          Thanks for your interest 🤟"
              open={isOpen}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </header>
        <div className="mx-auto max-w-5xl pt-36 md:pt-64">
          <Image src="/preview.png" alt="Preview" width={1920} height={1080} />
        </div>
      </main>
    </div>
  );
};
