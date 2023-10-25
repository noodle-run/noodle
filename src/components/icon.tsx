import { icons } from "lucide-react";

interface Props {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export const Icon: React.FC<Props> = ({ name, color, size, strokeWidth }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon strokeWidth={strokeWidth} color={color} size={size} />;
};

export type IconNames = keyof typeof icons;
export const iconNames = Object.keys(icons) as IconNames[];
