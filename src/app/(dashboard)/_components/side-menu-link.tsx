"use client";
import { cn } from "@/utils/cn";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { type FC, type ReactNode } from "react";

type SideMenuLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

export const SideMenuLink: FC<SideMenuLinkProps> = ({ href, label, icon }) => {
  const pathname = usePathname();

  return (
    <li>
      <Button
        as={NextLink}
        href={href}
        startContent={icon}
        className={cn(
          "w-full justify-start text-default-500 hover:text-default-900",
          pathname === href && "text-default-900",
        )}
        variant="light"
        size="md"
      >
        {label}
      </Button>
    </li>
  );
};
