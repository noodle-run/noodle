/* eslint-disable jsx-a11y/label-has-associated-control */
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

type InputProps = Pick<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type' | 'onChange' | 'value' | 'required' | 'defaultValue'
> & {
  label: string;
};

// Based on https://play.tailwindcss.com/asmAkefxLr
export const Input: FC<InputProps> = ({ label, ...rest }) => (
  <div className="relative w-full group">
    <input
      {...rest}
      data-testid="input-atom"
      type="text"
      className="w-full px-3 py-3 transition-colors bg-transparent outline-none peer"
      placeholder=" "
    />

    <label
      className="absolute left-[9px] top-px text-sm text-zinc-500 transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none
  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base group-focus-within:!top-px group-focus-within:!text-sm group-focus-within:!text-primary-500"
    >
      {label}
    </label>

    <fieldset
      className="inset-0 absolute border transition-colors border-zinc-600 rounded pointer-events-none mt-[-9px] invisible peer-placeholder-shown:visible
  group-focus-within:!border-primary-500 group-focus-within:border-2 group-hover:border-zinc-700"
    >
      <legend className="ml-2 px-0 text-sm transition-all duration-300 invisible max-w-[0.01px] group-focus-within:max-w-full group-focus-within:px-1 whitespace-nowrap">
        {label}
      </legend>
    </fieldset>

    <fieldset
      className="inset-0 absolute border transition-colors border-zinc-600 rounded pointer-events-none mt-[-9px] visible peer-placeholder-shown:invisible
  group-focus-within:border-2 group-focus-within:!border-primary-500 group-hover:border-zinc-700"
    >
      <legend className="invisible max-w-full px-1 ml-2 text-sm whitespace-nowrap">
        {label}
      </legend>
    </fieldset>
  </div>
);

/* eslint-enable jsx-a11y/label-has-associated-control */
