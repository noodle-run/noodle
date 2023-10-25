"use client";

import { UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import { PanelRightCloseIcon, PanelRightOpenIcon } from "lucide-react";
import { useSideMenu } from "../_context/side-menu";

export const Navbar = () => {
  const { isOpen, toggle } = useSideMenu();
  return (
    <nav className="flex justify-between">
      <Button
        isIconOnly
        onClick={toggle}
        size="sm"
        variant="light"
        radius="md"
        className="text-default-400 hover:text-default-900"
      >
        {isOpen ? (
          <PanelRightCloseIcon size={20} />
        ) : (
          <PanelRightOpenIcon size={20} />
        )}
      </Button>

      <UserButton afterSignOutUrl="/" />
    </nav>
  );
};
