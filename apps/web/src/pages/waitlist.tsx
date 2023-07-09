import { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Balancer } from 'react-wrap-balancer';
import { ArrowRight, Check, Loader2, Mail, User } from 'lucide-react';
import { type NextPage } from 'next';
import { z } from 'zod';

import { cn } from '@noodle/ui';

import { Input } from '@/components/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select';
import { api } from '@/utils/api';

const formInputValidator = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  reason: z.enum(['STUDENT', 'PROJECT', 'BOTH']),
});

const WaitList: NextPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [reason, setReason] = useState<
    'STUDENT' | 'PROJECT' | 'BOTH' | undefined
  >(undefined);
  const [formDisabled, setFormDisabled] = useState(true);
  const { mutate, error, isSuccess, isLoading } =
    api.waitlist.addEmailToWaitList.useMutation();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formDisabled) return;

    if (reason) {
      mutate({ email, name, reason });
    }

    setEmail('');
    setName('');
    setReason(undefined);
  };

  useEffect(() => {
    const data = formInputValidator.safeParse({ email, name, reason });
    if (data.success) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [email, name, reason]);

  return (
    <main>
      <header className="container mx-auto mt-32 flex justify-center md:mt-48 xl:mt-56">
        <div className="flex flex-col gap-6">
          <h1 className="mx-auto max-w-[20ch] text-center text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl">
            <Balancer>
              Join the waitlist and transform your educational productivity.
            </Balancer>
          </h1>
          <p className="text-gray-11 dark:text-graydark-11 mx-auto text-center">
            <Balancer>
              By signing up to our waitlist, you will be first in line to know
              when we launch and geting early access.
            </Balancer>
          </p>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-6 flex w-full max-w-lg flex-col items-center gap-4"
          >
            <Input
              type="text"
              placeholder="Your name..."
              icon={<User />}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email address..."
              icon={<Mail />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Select
              onValueChange={(e: 'STUDENT' | 'PROJECT' | 'BOTH') =>
                setReason(e)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Why are you interested in Noodle?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="STUDENT">I&apos;m a student</SelectItem>
                <SelectItem value="PROJECT">
                  I&apos;m interested in the project
                </SelectItem>
                <SelectItem value="BOTH">Both</SelectItem>
              </SelectContent>
            </Select>
            <button
              type="submit"
              disabled={formDisabled}
              className="bg-primary-500 hover:bg-primary-700 text-gray-12 disabled:bg-gray-4 dark:disabled:bg-graydark-4 disabled:text-gray-8 dark:disabled:text-graydark-8 disabled:border-gray-6 dark:disabled:border-graydark-6 flex w-full items-center justify-center gap-4 rounded-md px-6 py-3 font-semibold transition-colors disabled:border"
            >
              {isLoading ? (
                <Loader2 />
              ) : (
                <span className="flex items-center gap-4">
                  Secure your spot <ArrowRight size={20} />
                </span>
              )}
            </button>
          </form>
          <div className="mx-auto flex w-full max-w-lg justify-center">
            <AnimateHeight
              height={isSuccess ? 'auto' : 0}
              className={cn(isSuccess && 'w-full')}
            >
              <div className="bg-teal-2 dark:bg-tealdark-2/50 border-teal-2 dark:border-tealdark-2 flex w-full items-center gap-6 rounded-lg border px-4 py-4">
                <div className="flex h-full items-start">
                  <div className="bg-teal-1 dark:bg-tealdark-1 border-teal-11 dark:border-tealdark-11 rounded-full border p-[4px]">
                    <Check className="text-teal-10 h-4 w-4" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-11 dark:text-graydark-11">
                    <Balancer>
                      Thanks for signing up to our waitlist, we will be in touch
                      shortly when Noodle becomes available. Until then, you can{' '}
                      <a
                        href="https://twitter.com/noodle_run"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-12 dark:text-graydark-12 underline underline-offset-2"
                      >
                        follow us on twitter
                      </a>{' '}
                      for all updates.
                    </Balancer>
                  </p>
                </div>
              </div>
            </AnimateHeight>
            <AnimateHeight
              height={error ? 'auto' : 0}
              className={cn(error && 'w-full')}
            >
              <div className="bg-red-1 dark:bg-reddark-2/50 border-red-2 dark:border-reddark-2 flex w-full items-center gap-6 rounded-lg border px-4 py-4">
                <div className="flex h-full items-start">
                  <div className="bg-red-1 dark:bg-reddark-1 border-red-11 dark:border-reddark-11 rounded-full border p-[4px]">
                    <Check className="text-red-10 h-4 w-4" />
                  </div>
                </div>
                <div>
                  <p className="text-red-11 dark:text-reddark-11">
                    <Balancer>{error?.message}</Balancer>
                  </p>
                </div>
              </div>
            </AnimateHeight>
          </div>
        </div>
      </header>
    </main>
  );
};

export default WaitList;
