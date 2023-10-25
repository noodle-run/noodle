import { cn } from "@/utils/cn";
import { forwardRef } from "react";

export const TypographyH1 = forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        "mt-6 text-5xl font-extrabold tracking-tight lg:text-6xl",
        className,
      )}
      {...props}
    />
  );
});

TypographyH1.displayName = "TypographyH1";
