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
    <div className="min-h-screen overflow-hidden bg-[url('/bg.svg')] bg-bottom bg-no-repeat bg-cover">
      <main className="container px-6 py-8 mx-auto md:px-0">
        <Navbar />
        <header className="pt-24 text-center">
          <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-5xl">
            Rethinking student productivity.
          </h1>
          <p className="max-w-2xl pt-3 mx-auto text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            Noodle is an open source student productivity tool, providing
            students with all the tools they need to organise their life and
            study more efficiently.
          </p>
          <div className="flex flex-col items-center mt-12">
            <form
              onSubmit={onSubmit}
              className={twMerge(
                'dark:bg-zinc-800 bg-zinc-200 flex flex-col md:flex-row rounded-lg md:rounded-full shadow-md min-w-full md:min-w-[50ch]',
              )}
              noValidate
            >
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent flex-1 text-sm py-3 pl-6 rounded-lg md:rounded-l-full outline-none placeholder:text-zinc-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="px-6 py-2 md:py-0 font-semibold shadow-md text-sm bg-primary-500 transition-colors rounded-b-lg md:rounded-full"
              >
                Join waitlist!
              </button>
            </form>
            <div className="min-w-full md:min-w-[52ch] h-12 flex justify-start text-sm text-red-500">
              {waitlistFormError && (
                <p className="flex gap-3 items-center">
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
        <div className="max-w-5xl mx-auto pt-36 md:pt-64">
          <Image src="/preview.png" alt="Preview" width={1920} height={1080} />
        </div>
      </main>
    </div>
  );
};
