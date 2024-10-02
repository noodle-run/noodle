'use client';

import { Button } from '@/primitives/button';
import { Input } from '@/primitives/input';
import { useFormState, useFormStatus } from 'react-dom';
import type { SignInState } from '../_actions/sign-in';
import { emailSignIn } from '../_actions/sign-in';
import { Loader2Icon } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'sonner';

const initialState: SignInState = {
  type: 'initial',
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <Loader2Icon className="mr-2 size-5 animate-spin" />
      ) : (
        'Continue with email'
      )}
    </Button>
  );
}

export function EmailSignIn() {
  const [state, formAction] = useFormState(emailSignIn, initialState);

  useEffect(() => {
    if (state.type === 'success') {
      toast.success(state.message);
    }

    if (state.type === 'error') {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          variant="outline"
          scale="md"
        />
        <SubmitButton />
      </div>
    </form>
  );
}
