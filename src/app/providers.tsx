"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type PropsWithChildren, useEffect, useState } from "react";
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
      <NextThemesProvider attribute="class" enableSystem>
        <ToastProvider />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
