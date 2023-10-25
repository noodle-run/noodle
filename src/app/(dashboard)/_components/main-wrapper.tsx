"use client";

import { cn } from "@/utils/cn";
import { type FC, type PropsWithChildren } from "react";
import { useSideMenu } from "../_context/side-menu";
import { Navbar } from "./navbar";

export const MainDashboardWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen } = useSideMenu();

  return (
    <main
      className={cn(
        "m-8 ml-[280px] flex-1 rounded-2xl border border-default-200 p-8 transition-all dark:border-default-50",
        isOpen && "ml-8",
      )}
    >
      <Navbar />
      {children}
    </main>
  );
};
