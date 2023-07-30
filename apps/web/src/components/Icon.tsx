import { type LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';

export type IconNames = keyof typeof dynamicIconImports;

const iconNames = Object.keys(dynamicIconImports) as IconNames[];

type IconProps = {
  name: IconNames;
} & LucideProps;

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon strokeWidth={1.5} size={18} {...props} />;
};

export { Icon, iconNames };
