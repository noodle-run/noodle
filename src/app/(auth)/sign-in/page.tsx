import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/primitives/button';
import { Separator } from '@/primitives/separator';
import * as FaIcons from 'react-icons/fa';
import { providerMap, signIn } from '@/lib/auth';
import { EmailSignIn } from './_components/email-sign-in';

export default function SignInPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div className="w-[384px] space-y-6 rounded-xl border bg-gray-subtle p-8 shadow-lg">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Image src="/logo.svg" alt="Logo" width={48} height={48} />
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign in to Noodle
          </h1>
          <p className="text-sm text-foreground-muted">
            Access your account or create a new one
          </p>
        </div>

        <EmailSignIn />

        <div className="flex items-center">
          <Separator className="flex-1" />
          <span className="px-2 text-xs uppercase text-gray-solid-hover">
            Or continue with
          </span>
          <Separator className="flex-1" />
        </div>

        <div className="space-y-2">
          {Object.values(
            providerMap.filter((provider) => provider.name !== 'Resend'),
          ).map((provider) => {
            const Icon =
              provider.name === 'GitHub'
                ? FaIcons['FaGithub']
                : FaIcons[`Fa${provider.name}` as keyof typeof FaIcons];
            return (
              <form
                key={provider.id}
                action={async () => {
                  'use server';

                  await signIn(provider.id, { redirectTo: '/app' });
                }}
              >
                <Button type="submit" variant="outline" className="w-full">
                  <Icon className="size-4" />
                  Continue with {provider.name}
                </Button>
              </form>
            );
          })}
        </div>

        <p className="text-center text-xs text-foreground-muted">
          By continuing, you agree to our
          <br />
          <Link
            href="/tos"
            className="font-medium text-pink-solid hover:underline"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy"
            className="font-medium text-pink-solid hover:underline"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </main>
  );
}
