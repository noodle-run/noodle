import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const styles = cva(
  ['px-2', 'py-1', 'text-xs', 'rounded-full', 'truncate', 'max-w-[15ch]'],
  {
    variants: {
      color: {
        slate: ['bg-slate-400', 'text-slate-800'],
        gray: ['bg-gray-400', 'text-gray-800'],
        zinc: ['bg-zinc-400', 'text-zinc-800'],
        neutral: ['bg-neutral-400', 'text-neutral-800'],
        stone: ['bg-stone-400', 'text-stone-800'],
        red: ['bg-red-400', 'text-red-800'],
        orange: ['bg-orange-400', 'text-orange-800'],
        amber: ['bg-amber-400', 'text-amber-800'],
        yellow: ['bg-yellow-400', 'text-yellow-800'],
        lime: ['bg-lime-400', 'text-lime-800'],
        green: ['bg-green-400', 'text-green-800'],
        emerald: ['bg-emerald-400', 'text-emerald-800'],
        teal: ['bg-teal-400', 'text-teal-800'],
        cyan: ['bg-cyan-400', 'text-cyan-800'],
        sky: ['bg-sky-400', 'text-sky-800'],
        blue: ['bg-blue-400', 'text-blue-800'],
        indigo: ['bg-indigo-400', 'text-indigo-800'],
        violet: ['bg-violet-400', 'text-violet-800'],
        purple: ['bg-purple-400', 'text-purple-800'],
        fuchsia: ['bg-fuchsia-400', 'text-fuchsia-800'],
        pink: ['bg-pink-400', 'text-pink-800'],
        rose: ['bg-rose-400', 'text-rose-800'],
      },
    },
  },
);

type ModuleTagProps = {
  color: string;
  name: string;
};

export const ModuleTag: FC<ModuleTagProps> = ({ name, color }) => {
  return (
    <div
      className={styles({
        color: color as VariantProps<typeof styles>['color'],
      })}
    >
      {name}
    </div>
  );
};
