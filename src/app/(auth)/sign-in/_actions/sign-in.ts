'use server';

import { signIn } from '@/lib/auth';
import { AuthError } from 'next-auth';

export interface SignInState {
  type: 'success' | 'error' | 'initial';
  message: string;
}

export async function emailSignIn(
  prevState: SignInState,
  formData: FormData,
): Promise<SignInState> {
  if (prevState.type === 'success') {
    return {
      type: 'success',
      message: 'Email already sent',
    };
  }

  try {
    await signIn('resend', {
      redirect: false,
      ...Object.fromEntries(formData),
    });

    return {
      type: 'success',
      message: 'An email has been sent to you. Please check your inbox.',
    };
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        type: 'error',
        message: error.message,
      };
    }

    return {
      type: 'error',
      message: 'An error occurred during sign-in. Please try again.',
    };
  }
}
