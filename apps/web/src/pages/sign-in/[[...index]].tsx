import { SignIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

import { type NextPageWithLayout } from '@/utils/NextPageWithLayout';

const SignInPage: NextPageWithLayout = () => {
  const { resolvedTheme } = useTheme();

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center">
      <SignIn
        appearance={{
          baseTheme:
            resolvedTheme === 'dark' ? dark : { __type: 'prebuilt_appearance' },
          elements: {
            formButtonPrimary: 'hover:bg-primary-900 transition-colors',
            formFieldInput:
              'bg-gray-2 dark:bg-graydark-2 border-gray-6 dark:border-graydark-6',
            card: 'bg-gray-1 dark:bg-graydark-1 border border-gray-4 dark:border-graydark-4 shadow-none',
          },
          layout: {
            privacyPageUrl: '/privacy',
            termsPageUrl: '/terms',
            socialButtonsPlacement: 'bottom',
          },
          variables: {
            colorPrimary: '#e64d67',
          },
        }}
      />
    </main>
  );
};

export default SignInPage;
