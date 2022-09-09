import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

type InputProps = Pick<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type' | 'placeholder' | 'onChange' | 'value' | 'required' | 'defaultValue'
>;

export const Input: FC<InputProps> = (props) => (
  <input
    {...props}
    data-testid="input-atom"
    className="px-4 py-2 text-sm border rounded md:px-6 md:py-3 md:text-base dark:bg-zinc-800 bg-zinc-200 border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
  />
);
