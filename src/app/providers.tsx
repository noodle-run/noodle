"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState, type PropsWithChildren } from "react";
import { Toaster } from "sonner";

const ToastProvider = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Toaster
      closeButton
      richColors
      theme={(resolvedTheme as "dark" | "light" | undefined) ?? "system"}
    />
  );
};

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextUIProvider>
      <ToastProvider />
      {children}
    </NextUIProvider>
  );
}
