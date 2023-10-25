"use client";

import { cn } from "@/utils/cn";
import { type FC, type PropsWithChildren } from "react";
import { useSideMenu } from "../_context/side-menu";

export const SideMenuWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen } = useSideMenu();

  return (
    <aside
      className={cn(
        "fixed left-0 h-screen w-[280px] p-8 pr-0 transition-all",
        isOpen && "-left-full",
        "flex flex-col justify-between",
      )}
    >
      {children}
    </aside>
  );
};
