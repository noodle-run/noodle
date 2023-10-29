import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  href,
  name,
  Icon,
}: {
  href: string;
  name: string;
  Icon: LucideIcon;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${
        pathname == href ? "text-white" : "text-gray-400"
      } flex gap-2`}
    >
      <Icon size={20} />
      <p>{name}</p>
    </Link>
  );
}
