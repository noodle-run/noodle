import { icons } from 'lucide-react';

interface Props {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export const Icon: React.FC<Props> = ({ name, color, size, strokeWidth }) => {
  // eslint-disable-next-line security/detect-object-injection
  const LucideIcon = icons[name];

  return (
    <LucideIcon strokeWidth={strokeWidth} color={color} size={size ?? 24} />
  );
};

export type IconNames = keyof typeof icons;
export const iconNames = Object.keys(icons) as IconNames[];
